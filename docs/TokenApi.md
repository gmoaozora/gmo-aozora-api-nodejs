# TokenApi

All URIs are relative to *https://stg-api.gmo-aozora.com/ganb/api/auth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenUsingPOST**](TokenApi.md#tokenUsingPOST) | **POST** /token | アクセストークン発行


# **getToken**
> TokenResponse getToken(code, authMethod, redirectUri)

### アクセストークン発行

認可エンドポイントで取得した認可コードを用いたアクセストークンの取得及びリフレッシュトークンを用いたアクセストークンの更新を行うためのエンドポイント

### Example

#### get new token
```javascript
let GanbLib = require('./gmo-aozora-api-nodejs/index.js');

let saveCallback = function(nonce){
    // implement your function
}

let checkCallback = function(nonce){
    // implement your function
}

let ganbLib = new GanbLib({clientID: "clientID_example", clientSecret: "clientSecret_example", nonceCallbacks: [saveCallback, checkCallback]});
let redirectUri = "redirectUri_example";
let params = {code: 'code_example', authMethod: 'basic', redirect_uri: redirectUri};
ganbLib.oAuth.getToken(params).then((result) => {
  console.log(result);
});
```

#### refresh token
```javascript
let GanbLib = require('./gmo-aozora-api-nodejs/index.js');

let saveCallback = function(nonce){
    // implement your function
}

let checkCallback = function(nonce){
    // implement your function
}

let ganbLib = new GanbLib({clientID: "clientID_example", clientSecret: "clientSecret_example", nonceCallbacks: [saveCallback, checkCallback]});
const refreshToken = "refresh token_example";
ganbLib.refreshTokens(refreshToken).then((result) => {
  console.log(result);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String** | 新規発行時のみ必須 認可エンドポイントにて当社から返却した認可コード minLength: 1 maxLength: 128 |
 **authMethod** | **String** | 事前に登録したクライアント認証方式。ベーシック認証: 「basic」、クライアントシークレット認証: 「post」 |
 **redirectUri** | **String** | 貴社が指定する認可コードをリダイレクトするためのURI  minLength: 1 maxLength: 256  |
 
### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8
