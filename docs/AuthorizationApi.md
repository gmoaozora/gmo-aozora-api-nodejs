# AuthorizationApi

All URIs are relative to *https://stg-api.gmo-aozora.com/ganb/api/auth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization**](AuthorizationApi.md#authorization) | **GET** /authorization | 認可


# **authorization**
> authorization(clientId, scope, redirectUri)

### 認可

クライアントがユーザーの認証・認可を得るためのエンドポイント

### Example
```javascript
let GanbLib = require('./gmo-aozora-api-nodejs/index.js');

let saveCallback = function(nonce){
    // implement your function
}

let checkCallback = function(nonce){
    // implement your function
}

let ganbLib = new GanbLib({clientID: "clientID_example", clientSecret: "clientSecret_example", nonceCallbacks: [saveCallback, checkCallback]});
let sessionID = "sessionID_example"
let scope = "private:account private:virtual-account private:transfer private:bulk-transfer";
let redirectUri = "redirectUri_example";
let authorization = ganbLib.oAuth.authorization(sessionID, scope, redirectUri);
console.log(authorization);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| クライアントID (当社が事前に発行する貴社向けのID)  minLength: 1 maxLength: 128  |
 **scope** | **String**| 要求されるアクセス権限を示すスコープID。 複数設定する場合は半角スペース区切りにて連結。 リフレッシュトークンを発行する場合は offline_access scope値が必要。  minLength: 1 maxLength: 256  |
 **redirectUri** | **String**| 貴社が指定する認可コードをリダイレクトするためのURI  minLength: 1 maxLength: 256  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

