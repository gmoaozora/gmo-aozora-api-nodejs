# GmoAozoraNetBankOpenApi.WebhooksApi

All URIs are relative to *https://api.gmo-aozora.com/ganb/api/webhooks/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsUsing**](WebhooksApi.md#accountsUsing) | **POST** /subscribe | 通知配信制御
[**accountsUsingGET**](WebhooksApi.md#accountsUsingGET) | **GET** /unsentlist/va-deposit-transaction | 振込入金口座未送信明細取得


<a name="accountsUsing"></a>
# **accountsUsing**
> accountsUsing(authorization, body)

通知配信制御

指定したイベント通知に対応するイベント通知（WebHook）の配信開始、配信停止をコントロールします

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.WebhooksApi();

var authorization = "authorization_example"; // String | 認証情報 銀行システムが配信先システムに発行した、クライアントIDとクライアントシーレットを\":\"（コロン）で連結し、Base64エンコードした値を設定 minLength: ‐ maxLength: ‐ 

var body = new GmoAozoraNetBankOpenApi.SubscribeRequestBody(); // SubscribeRequestBody | HTTPリクエストボディ


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountsUsing(authorization, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| 認証情報 銀行システムが配信先システムに発行した、クライアントIDとクライアントシーレットを\&quot;:\&quot;（コロン）で連結し、Base64エンコードした値を設定 minLength: ‐ maxLength: ‐  | 
 **body** | [**SubscribeRequestBody**](SubscribeRequestBody.md)| HTTPリクエストボディ | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="accountsUsingGET"></a>
# **accountsUsingGET**
> VaDepositTransactionUnsentResponse accountsUsingGET(authorization)

振込入金口座未送信明細取得

配信停止状態となっている場合、本APIを利用することで未送信または送信エラーとなっている、振込入金口座の入金明細を一括で取得することができます 通常、未送信または送信エラーとなっている明細は配信再開後に通知されますが、本APIで取得された明細は配信済みとなるため、配信再開後には通知されません 未送信または送信エラーとなっている明細が無い場合は404 Not Foundを返却します &lt;p&gt;&lt;font color&#x3D;\&quot;red\&quot;&gt;※法人口座および個人事業主口座のみ対象となり、個人口座は対象外となります&lt;/font&gt;&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取得上限件数&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;500件&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細数が500に満たないときは取得できる明細のみを返却します&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できた明細数が500件の場合、まだ取得できる明細が残っている可能性がありますので、&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;「404：Not Found」が返却されるまで、リクエストを繰り返してください。&lt;/p&gt; &lt;/div&gt; 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.WebhooksApi();

var authorization = "authorization_example"; // String | 認証情報 銀行システムが配信先システムに発行した、クライアントIDとクライアントシーレットを\":\"（コロン）で連結し、Base64エンコードした値を設定 minLength: ‐ maxLength: ‐ 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountsUsingGET(authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| 認証情報 銀行システムが配信先システムに発行した、クライアントIDとクライアントシーレットを\&quot;:\&quot;（コロン）で連結し、Base64エンコードした値を設定 minLength: ‐ maxLength: ‐  | 

### Return type

[**VaDepositTransactionUnsentResponse**](VaDepositTransactionUnsentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

