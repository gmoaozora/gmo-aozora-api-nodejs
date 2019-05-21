# GmoAozoraNetBankOpenApi.AccountApi

All URIs are relative to *https://stg-api.gmo-aozora.com/ganb/stg-api/corporation/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsDepositTransactionsUsingGET**](AccountApi.md#accountsDepositTransactionsUsingGET) | **GET** /accounts/deposit-transactions | 振込入金明細照会
[**accountsUsingGET**](AccountApi.md#accountsUsingGET) | **GET** /accounts | 口座一覧照会
[**balancesUsingGET**](AccountApi.md#balancesUsingGET) | **GET** /accounts/balances | 残高照会
[**transactionsUsingGET**](AccountApi.md#transactionsUsingGET) | **GET** /accounts/transactions | 入出金明細照会


<a name="accountsDepositTransactionsUsingGET"></a>
# **accountsDepositTransactionsUsingGET**
> DepositTransactionsResponse accountsDepositTransactionsUsingGET(accountId, xAccessToken, opts)

振込入金明細照会

&lt;p&gt;指定した円普通預金口座の振込入金明細情報を照会します&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;対象科目&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;円普通預金口座&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取得上限件数&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;500件&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細数が500に満たないときは取得できる明細のみを返却します&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細が存在しない場合は「200：OK」とし明細を返却しません&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ページング&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;2ページ目以降を照会する際は、初回と同じリクエスト内容に、初回レスポンスの次明細キーを追加してリクエストしてください&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ソート順&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取引の昇順&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;width:600px; margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;対象期間&lt;/p&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px; background-color:#29659b;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff;&#39;&gt;日本語名&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9312;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9313;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9314;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9315;&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間From&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間To&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;ul&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9312;の場合　当日分の振込入金明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9313;の場合　対象期間From　～　当日までの振込入金明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9314;の場合　取引初回　～　対象期間Toまでの振込入金明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9315;の場合　対象期間From　～　対象期間Toまでの振込入金明細を返却&lt;/li&gt;   &lt;/ul&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin-bottom:40px;&#39; /&gt; 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.AccountApi();

var accountId = "accountId_example"; // String | 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29 

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 

var opts = { 
  'dateFrom': "dateFrom_example", // String | 対象期間From 半角文字 YYYY-MM-DD形式  minLength: 10 maxLength: 10 
  'dateTo': "dateTo_example", // String | 対象期間To 半角文字 YYYY-MM-DD形式  対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10 
  'nextItemKey': "nextItemKey_example" // String | 次明細キー 半角数字 初回要求時は未設定 初回応答で次明細フラグが「true」の場合、返却された同項目を2回目以降に設定  minLength: 1 maxLength: 24 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountsDepositTransactionsUsingGET(accountId, xAccessToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29  | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 
 **dateFrom** | **String**| 対象期間From 半角文字 YYYY-MM-DD形式  minLength: 10 maxLength: 10  | [optional] 
 **dateTo** | **String**| 対象期間To 半角文字 YYYY-MM-DD形式  対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10  | [optional] 
 **nextItemKey** | **String**| 次明細キー 半角数字 初回要求時は未設定 初回応答で次明細フラグが「true」の場合、返却された同項目を2回目以降に設定  minLength: 1 maxLength: 24  | [optional] 

### Return type

[**DepositTransactionsResponse**](DepositTransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="accountsUsingGET"></a>
# **accountsUsingGET**
> AccountsResponse accountsUsingGET(xAccessToken)

口座一覧照会

保有する全ての口座情報一覧を照会します

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.AccountApi();

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountsUsingGET(xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**AccountsResponse**](AccountsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="balancesUsingGET"></a>
# **balancesUsingGET**
> BalancesResponse balancesUsingGET(xAccessToken, opts)

残高照会

保有する口座の残高情報を照会します 口座IDを指定した場合、該当する口座の残高情報を照会します 口座IDを指定しない場合、保有する口座全ての残高情報を照会します 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.AccountApi();

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 

var opts = { 
  'accountId': "accountId_example" // String | 口座ID 口座を識別するID  minLength: 12 maxLength: 29 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.balancesUsingGET(xAccessToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 
 **accountId** | **String**| 口座ID 口座を識別するID  minLength: 12 maxLength: 29  | [optional] 

### Return type

[**BalancesResponse**](BalancesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="transactionsUsingGET"></a>
# **transactionsUsingGET**
> TransactionsResponse transactionsUsingGET(accountId, xAccessToken, opts)

入出金明細照会

&lt;p&gt;指定した円普通預金口座の入出金明細情報を照会します&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;対象科目&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;円普通預金口座&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取得上限件数&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;500件&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細数が500に満たないときは取得できる明細のみを返却します&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細が存在しない場合は「200：OK」とし明細を返却しません&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ページング&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;2ページ目以降を照会する際は、初回と同じリクエスト内容に、初回レスポンスの次明細キーを追加してリクエストしてください&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ソート順&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取引の昇順&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;width:600px; margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;対象期間&lt;/p&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px; background-color:#29659b;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff;&#39;&gt;日本語名&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9312;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9313;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9314;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9315;&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間From&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間To&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;ul&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9312;の場合　当日分の入出金明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9313;の場合　対象期間From　～　当日までの入出金明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9314;の場合　取引初回　～　対象期間Toまでの入出金明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9315;の場合　対象期間From　～　対象期間Toまでの入出金明細を返却&lt;/li&gt;   &lt;/ul&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin-bottom:40px;&#39; /&gt; 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.AccountApi();

var accountId = "accountId_example"; // String | 口座ID 半角英数字 口座を識別するID 科目コードが以下の場合のみ受け付けます ・01=普通預金（有利息） ・02=普通預金（決済用）  minLength: 12 maxLength: 29 

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128            

var opts = { 
  'dateFrom': "dateFrom_example", // String | 対象期間From 半角文字 YYYY-MM-DD形式  minLength: 10 maxLength: 10 
  'dateTo': "dateTo_example", // String | 対象期間To 半角文字 YYYY-MM-DD形式 対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10 
  'nextItemKey': "nextItemKey_example" // String | 次明細キー 半角数字 初回要求時は未設定 初回応答で次明細キーが「true」の場合、返却された同項目を2回目以降に設定  minLength: 1 maxLength: 24 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transactionsUsingGET(accountId, xAccessToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| 口座ID 半角英数字 口座を識別するID 科目コードが以下の場合のみ受け付けます ・01&#x3D;普通預金（有利息） ・02&#x3D;普通預金（決済用）  minLength: 12 maxLength: 29  | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128             | 
 **dateFrom** | **String**| 対象期間From 半角文字 YYYY-MM-DD形式  minLength: 10 maxLength: 10  | [optional] 
 **dateTo** | **String**| 対象期間To 半角文字 YYYY-MM-DD形式 対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10  | [optional] 
 **nextItemKey** | **String**| 次明細キー 半角数字 初回要求時は未設定 初回応答で次明細キーが「true」の場合、返却された同項目を2回目以降に設定  minLength: 1 maxLength: 24  | [optional] 

### Return type

[**TransactionsResponse**](TransactionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

