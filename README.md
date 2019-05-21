# GMO Aozora Net Bank Open Api Node.js SDK

## About

GMOあおぞらネット銀行について

https://gmo-aozora.com/

GMOあおぞらネット銀行 API開発者ポータルについて

https://api.gmo-aozora.com/ganb/developer/

## Version

1.0.0

## Requirements

Node 10+

## Installation

- clone the repository from *Github* **in your project folder**\
  https://github.com/gmoaozora/gmo-aozora-api-nodejs
- With the **terminal**, go to the folder and run\
  `npm install` 

## Getting started

### Enviroment

Add the configuration below into your config file

* stg

    conf.json
    ```json
    {
        "AUTH_BASE_URL": "https://stg-api.gmo-aozora.com/ganb/api/auth/v1",
        "JWT_ISSUER": "https://stg-api.gmo-aozora.com/",
        "AUTH_PATH": "/authorization",
        "TOKEN_PATH": "/token",
        "SALT": "PleaseDefineYourself"
    }
    ```
    [ApiClient.js - Personal ](../client/personal/src/ApiClient.js) 
    ```js
        this.basePath = 'https://stg-api.gmo-aozora.com/ganb/api/personal/v1'.replace(/\/+$/, '');
    ```
    [ApiClient.js - Corporate ](../client/corporate/src/ApiClient.js) 
    ```js
        this.basePath = 'https://stg-api.gmo-aozora.com/ganb/api/corporate/v1'.replace(/\/+$/, '');
    ```
    [ApiClient.js - Webhook ](../client/webhook/src/ApiClient.js) 
    ```js
        this.basePath = 'https://stg-api.gmo-aozora.com/ganb/api/webhook/v1'.replace(/\/+$/, '');
    ```

* prod

    conf.json
    ```json
    {
        "AUTH_BASE_URL": "https://api.gmo-aozora.com/ganb/api/auth/v1",
        "JWT_ISSUER": "https://api.gmo-aozora.com/",
        "AUTH_PATH": "/authorization",
        "TOKEN_PATH": "/token",
        "SALT": "PleaseDefineYourself"
    }
    ```
    [ApiClient.js - Personal ](../client/personal/src/ApiClient.js) 
    ```js
        this.basePath = 'https://api.gmo-aozora.com/ganb/api/personal/v1'.replace(/\/+$/, '');
    ```
    [ApiClient.js - Corporate ](../client/corporate/src/ApiClient.js) 
    ```js
        this.basePath = 'https://api.gmo-aozora.com/ganb/api/corporate/v1'.replace(/\/+$/, '');
    ```
    [ApiClient.js - Webhook ](../client/webhook/src/ApiClient.js) 
    ```js
        this.basePath = 'https://api.gmo-aozora.com/ganb/api/webhook/v1'.replace(/\/+$/, '');
    ```

## Documentation

- [Authorization](docs/)
- [Corporate](client/corporate/docs/)
- [Personal](client/personal/docs/)
- [Webhook](client/webhook/docs/)


## Autor

GMO Aozora Net Bank, Ltd. (open-api@gmo-aozora.com)

## Licence

[MIT](https://github.com/gmoaozora/gmo-aozora-api-nodejs/blob/master/LICENSE)