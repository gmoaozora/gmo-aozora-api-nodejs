# TokenApi

All URIs are relative to *https://api.gmo-aozora.com/ganb/api/auth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenUsingPOST**](TokenApi.md#tokenUsingPOST) | **POST** /token | アクセストークン発行


<a name="tokenUsingPOST"></a>
# **tokenUsingPOST**
> TokenResponse tokenUsingPOST(contentType, body, authorization)

アクセストークン発行

認可エンドポイントで取得した認可コードを用いたアクセストークンの取得及びリフレッシュトークンを用いたアクセストークンの更 新を行うためのエンドポイント

### Example
```java
// Import classes:
//import common.ApiException;
//import auth.TokenApi;


TokenApi apiInstance = new TokenApi();
String contentType = "contentType_example"; // String | application/x-www-form-urlencodedに固定
TokenRequest body = new TokenRequest(); // TokenRequest | HTTPリクエストボディ
String authorization = "authorization_example"; // String | クライアント認証用のBasic認証値。 (クライアントIDとクライアントシーレットを:(コロン)で連結し、Base64エンコードしたものを設定。) 事前に登録する「クライアント認証方式」にclient_secret_basic(ベーシック認証)を設定した場合、必須。 「クライアント認証方式」にclient_secret_post(パラメーター認証)を設定した場合、設定不要。
try {
    TokenResponse result = apiInstance.tokenUsingPOST(contentType, body, authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TokenApi#tokenUsingPOST");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**| application/x-www-form-urlencodedに固定 |
 **body** | [**TokenRequest**](TokenRequest.md)| HTTPリクエストボディ |
 **authorization** | **String**| クライアント認証用のBasic認証値。 (クライアントIDとクライアントシーレットを:(コロン)で連結し、Base64エンコードしたものを設定。) 事前に登録する「クライアント認証方式」にclient_secret_basic(ベーシック認証)を設定した場合、必須。 「クライアント認証方式」にclient_secret_post(パラメーター認証)を設定した場合、設定不要。 | [optional]

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

