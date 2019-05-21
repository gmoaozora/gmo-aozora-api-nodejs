const request = require('superagent');
const querystring = require('querystring');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const uuid = require('uuid/v4');
const personalAPI = require('./client/personal/src');
const corporateAPI = require('./client/corporate/src');
const conf = require('./conf.json');


// Create a hash from session id & salt
function getState(sessionID, salt) {
    let hash = crypto.createHash('sha256');
    hash.update(sessionID + salt);
    return hash.digest('hex');
}

function authorizationHeader(clientID, clientSecret) {
    return `Basic ` + Buffer.from(`${clientID}:${clientSecret}`).toString('base64');
}

// Check JWT token
function isTokenValid(JWTToken, clientSecret, nonceInstance) {
    const decoded = jwt.decode(JWTToken, {complete: true});
    
    try {
        const isNonceValid = nonceInstance.checkAndDelete(decoded.payload.nonce);
        const isJWTValid = jwt.verify(JWTToken, clientSecret, {
            audience: this._clientID,
            issuer: conf.JWT_ISSUER
        });
        return isNonceValid && isJWTValid;
    } catch (e) {
        console.error(e);
        return false;
    }
}

class Nonce {
    constructor(save, check) {
        this.save = (nonce) => {
            save(nonce);
        };

        this.checkAndDelete = (nonce) => {
            return check(nonce);
        };
    }
}

module.exports = class GanbLib {

    constructor({clientID, clientSecret, nonceCallbacks}) {
        this._clientID = clientID;
        this._clientSecret = clientSecret;
        this.nonce = new Nonce(...nonceCallbacks);
    }

    get oAuth () {
        return {
            authorization: (sessionID, scope, redirectURI) => {
                console.log('### oAuth authorization');

                const state = getState(sessionID, conf.SALT);
                console.log('\t- state');
                console.log(state);
                
                const params = querystring.stringify({
                    response_type: 'code',
                    scope,
                    client_id: this._clientID,
                    state,
                    redirect_uri: redirectURI
                });
                
                // return redirect URL and params
                return `${conf.AUTH_BASE_URL}${conf.AUTH_PATH}?${params}`;
            },
            getToken: async (params) => {
                console.log('\t- oAuth get token');
                const tokenURL = `${conf.AUTH_BASE_URL}${conf.TOKEN_PATH}`;
                params.grant_type = 'authorization_code';

                let req = request.post(tokenURL)
                // TODO: REMOVE
                // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
                // let req = request.post('https://ec2-13-112-102-227.ap-northeast-1.compute.amazonaws.com:4000/analyse')
                    .set('Content-Type', 'application/x-www-form-urlencoded');

                if (params.authMethod === 'basic') {
                    const authHeader = authorizationHeader(this._clientID, this._clientSecret);
                    req.set('Authorization', authHeader);
                } else {
                    params.client_id = this._clientID;
                    params.client_secret = this._clientSecret;
                }
                
                console.log("\n\nREQUEST PARAMS\n\n");
                console.log(params);

                const result = await req.send(params);
                // TODO: REMOVE
                // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
                // console.log(req);
                
                // console.log("\n\nresult\n\n");
                // console.log(result);
                return result.body;
            }
        };
    }

    get openID () {
        return {
            authorization: (sessionID, scope, redirectURI) => {
                console.log('openID authorization');

                const state = getState(sessionID, conf.SALT);
                const nonce = uuid();
                if (!this.nonce.save) {
                    throw new Error(`no 'save' method set for openID 'nonce'`);
                }
                this.nonce.save(nonce);

                console.log('\t- state');
                console.log(state);
                console.log('\t- nonce');
                console.log(nonce);

                const params = querystring.stringify({
                    response_type: 'code',
                    scope,
                    client_id: this._clientID,
                    state,
                    redirect_uri: redirectURI,
                    nonce
                });
                
                // return redirect URL and params
                return `${conf.AUTH_BASE_URL}${conf.AUTH_PATH}?${params}`;
            },
            getToken: async (params) => {
                console.log('\t- openID get token');
                const tokenURL = `${conf.AUTH_BASE_URL}${conf.TOKEN_PATH}`;
                const authHeader = authorizationHeader(this._clientID, this._clientSecret);
                params.grant_type = 'authorization_code';
                params.client_id = this._clientID;
                params.client_secret = this._clientSecret;
                
                const response = await request.post(tokenURL)
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('Authorization', authHeader)
                    .send(params);

                const token = response.body;
                console.log(token);

                if (!token.id_token || !isTokenValid(token.id_token, this._clientSecret, this.nonce)) {
                    return false;
                }
                
                return token;
            }
        };
    }

    async refreshSession(err, response, token, tryCounter = 0) {
        console.log(`### refreshSession`);
        const COUNTER_MAX_TRIES = 3;
        let errData = null;
    
        console.log(err.status, err.text);

        if (err.text) {
            errData = JSON.parse(err.text);
        }

        // error status 401 and code WG_ERR_105 : Unauthorized, need to use refresh token
        if (!(err.status === 401 && (errData && errData['errorCode'] === 'WG_ERR_105'))) {
            return false;
        }

        // Display error in console
        console.log(`\n\nError status: ${err.status}, code: ${errData['errorCode']}`);
    
        console.log(`trying to refresh token. try #${tryCounter}`);
    
        if (tryCounter >= COUNTER_MAX_TRIES) {
            throw error(`max counter reached, could not refresh token`);
        }
    
        const tokenURL = `${conf.AUTH_BASE_URL}${conf.TOKEN_PATH}`;
        const authHeader = authorizationHeader(this._clientID, this._clientSecret);
        const params = {
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token,
            client_id: this._clientID,
            client_secret: this._clientSecret
        };
    
        try {
            let result = await request.post(tokenURL)
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', authHeader)
                .query(querystring.stringify(params));
            console.log(`REFRESH SESSION REQUEST RESULT`);
            console.log(result.body);
            return result.body;
        } catch (err) {
            return this.refreshSession(err, response, token, ++tryCounter);
        }
    }

    get api () {
        return {
            personal: personalAPI,
            corporate: corporateAPI
        };
    }
};