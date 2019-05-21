# AuthorizationApi

All URIs are relative to *https://api.gmo-aozora.com/ganb/api/auth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization**](AuthorizationApi.md#authorization) | **GET** /authorization | 認可


<a name="authorization"></a>
# **authorization**
> authorization(clientId, redirectUri, responseType, scope, state, nonce)

認可

クライアントがユーザーの認証・認可を得るためのエンドポイント

### Example
```java
// Import classes:
//import common.ApiException;
//import auth.AuthorizationApi;


AuthorizationApi apiInstance = new AuthorizationApi();
String clientId = "clientId_example"; // String | クライアントID (当社が事前に発行する貴社向けのID)  minLength: 1 maxLength: 128 
String redirectUri = "redirectUri_example"; // String | 貴社が指定する認可コードをリダイレクトするためのURI  minLength: 1 maxLength: 256 
String responseType = "responseType_example"; // String | 認可フロータイプ。 code固定
String scope = "scope_example"; // String | 要求されるアクセス権限を示すスコープID。 複数設定する場合は半角スペース区切りにて連結。 リフレッシュトークンを発行する場合は offline_access scope値が必要。  minLength: 1 maxLength: 256 
String state = "state_example"; // String | 貴社にて指定。(要求と応答の間で維持されるランダム値) CSRF対策として同一のセッションであることを確認するために利用する項目。  minLength: 1 maxLength: 128 
String nonce = "nonce_example"; // String | Client セッションと ID Token を紐づける文字列。設定された場合はそのままの値をID Tokenに含めて返却する。 リプレイアタック攻撃を防止するため、リクエスト毎にランダム値(十分な不規則性となる値)を設定し ID Tokenに含まれるnonce値が認可エンドポイントリクエスト時と同一であることを一度だけ検証するために利用する項目。  minLength: 1 maxLength: 128 
try {
    apiInstance.authorization(clientId, redirectUri, responseType, scope, state, nonce);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthorizationApi#authorization");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| クライアントID (当社が事前に発行する貴社向けのID)  minLength: 1 maxLength: 128  |
 **redirectUri** | **String**| 貴社が指定する認可コードをリダイレクトするためのURI  minLength: 1 maxLength: 256  |
 **responseType** | **String**| 認可フロータイプ。 code固定 |
 **scope** | **String**| 要求されるアクセス権限を示すスコープID。 複数設定する場合は半角スペース区切りにて連結。 リフレッシュトークンを発行する場合は offline_access scope値が必要。  minLength: 1 maxLength: 256  |
 **state** | **String**| 貴社にて指定。(要求と応答の間で維持されるランダム値) CSRF対策として同一のセッションであることを確認するために利用する項目。  minLength: 1 maxLength: 128  |
 **nonce** | **String**| Client セッションと ID Token を紐づける文字列。設定された場合はそのままの値をID Tokenに含めて返却する。 リプレイアタック攻撃を防止するため、リクエスト毎にランダム値(十分な不規則性となる値)を設定し ID Tokenに含まれるnonce値が認可エンドポイントリクエスト時と同一であることを一度だけ検証するために利用する項目。  minLength: 1 maxLength: 128  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

