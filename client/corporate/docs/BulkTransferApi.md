# GmoAozoraNetBankOpenApi.BulkTransferApi

All URIs are relative to *https://stg-api.gmo-aozora.com/ganb/stg-api/corporation/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkTransferCancelUsingPOST**](BulkTransferApi.md#bulkTransferCancelUsingPOST) | **POST** /bulktransfer/cancel | 総合振込取消依頼
[**bulkTransferFeeUsingPOST**](BulkTransferApi.md#bulkTransferFeeUsingPOST) | **POST** /bulktransfer/transferfee | 総合振込手数料事前照会
[**bulkTransferRequestResultUsingGET**](BulkTransferApi.md#bulkTransferRequestResultUsingGET) | **GET** /bulktransfer/request-result | 総合振込依頼結果照会
[**bulkTransferRequestUsingPOST**](BulkTransferApi.md#bulkTransferRequestUsingPOST) | **POST** /bulktransfer/request | 総合振込依頼
[**bulkTransferStatusUsingGET**](BulkTransferApi.md#bulkTransferStatusUsingGET) | **GET** /bulktransfer/status | 総合振込状況照会


<a name="bulkTransferCancelUsingPOST"></a>
# **bulkTransferCancelUsingPOST**
> TransferCancelResponse bulkTransferCancelUsingPOST(body, xAccessToken)

総合振込取消依頼

&lt;p&gt;総合振込の取消を行うための依頼をします&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取消対象ステータス&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;申請中以降のステータスで取消が可能です&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;依頼中、作成中の状態は取消対象外です&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取消対象キー区分&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取消対象の取引の内容について指定して下さい&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取消対象キー区分と、取消対象の振込申請番号の状態がマッチしない場合は、「400 Bad Request」を返却します&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;総合振込の対象は3または4のみとなります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;1、2は指定不可となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;・ビジネスID管理未利用の場合は、4を指定してください。その他は指定不可となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;・ビジネスID管理利用中かつ、申請者による申請中ステータスの「取下」を行いたい場合は、3を指定してください&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;・ビジネスID管理利用中かつ、承認可能者による予約中ステータスの「承認取消」を行いたい場合は、4を指定してください&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;重複した依頼&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;同一の受付番号（振込申請番号）への重複した依頼はできません&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;なお、前回の総合振込取消依頼が期限切れとなれば依頼は可能となります&lt;/p&gt; &lt;/div&gt; 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.BulkTransferApi();

var body = new GmoAozoraNetBankOpenApi.TransferCancelRequest(); // TransferCancelRequest | HTTPリクエストボディ

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkTransferCancelUsingPOST(body, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransferCancelRequest**](TransferCancelRequest.md)| HTTPリクエストボディ | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**TransferCancelResponse**](TransferCancelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="bulkTransferFeeUsingPOST"></a>
# **bulkTransferFeeUsingPOST**
> TransferFeeResponse bulkTransferFeeUsingPOST(body, xAccessToken)

総合振込手数料事前照会

&lt;p&gt;総合振込・総合振込予約を行うための依頼内容の事前チェックと手数料を照会します&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;ポイントについては、算出から振込実行までの間に変動する可能性があるため、手数料算出時の計算対象から除外しています&lt;/p&gt; &lt;/div&gt; 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.BulkTransferApi();

var body = new GmoAozoraNetBankOpenApi.BulkTransferRequest(); // BulkTransferRequest | HTTPリクエストボディ

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkTransferFeeUsingPOST(body, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BulkTransferRequest**](BulkTransferRequest.md)| HTTPリクエストボディ | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**TransferFeeResponse**](TransferFeeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="bulkTransferRequestResultUsingGET"></a>
# **bulkTransferRequestResultUsingGET**
> TransferRequestResultResponse bulkTransferRequestResultUsingGET(accountId, applyNo, xAccessToken)

総合振込依頼結果照会

総合振込依頼、総合振込取消依頼の処理状態を照会します 総合振込取消依頼をした場合は、最後の依頼の結果コードが照会対象となります 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.BulkTransferApi();

var accountId = "accountId_example"; // String | 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29 

var applyNo = "applyNo_example"; // String | 受付番号（振込申請番号） 半角数字 すべての振込・総合振込で採番される、照会の基本単位となる番号  minLength: 16 maxLength: 16 

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkTransferRequestResultUsingGET(accountId, applyNo, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29  | 
 **applyNo** | **String**| 受付番号（振込申請番号） 半角数字 すべての振込・総合振込で採番される、照会の基本単位となる番号  minLength: 16 maxLength: 16  | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**TransferRequestResultResponse**](TransferRequestResultResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="bulkTransferRequestUsingPOST"></a>
# **bulkTransferRequestUsingPOST**
> BulkTransferRequestResponse bulkTransferRequestUsingPOST(body, xAccessToken)

総合振込依頼

&lt;p&gt;総合振込・総合振込予約を行うための依頼をします&lt;/p&gt; 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.BulkTransferApi();

var body = new GmoAozoraNetBankOpenApi.BulkTransferRequest(); // BulkTransferRequest | HTTPリクエストボディ

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkTransferRequestUsingPOST(body, xAccessToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BulkTransferRequest**](BulkTransferRequest.md)| HTTPリクエストボディ | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 

### Return type

[**BulkTransferRequestResponse**](BulkTransferRequestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="bulkTransferStatusUsingGET"></a>
# **bulkTransferStatusUsingGET**
> BulkTransferStatusResponse bulkTransferStatusUsingGET(accountId, queryKeyClass, xAccessToken, opts)

総合振込状況照会

&lt;p&gt;仕向の総合振込状況および履歴を照会します&lt;/p&gt; &lt;h4 style&#x3D;&#39;margin-top:30px; border-left: solid 4px #1B2F48; padding: 0.1em 0.5em; color:#1B2F48;&#39;&gt;詳細説明&lt;/h4&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;取得上限件数&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;総合振込照会明細情報 500件（明細情報取得フラグが「False:取得しない」の場合）&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;総合振込明細情報 500件（明細情報取得フラグが「True：取得する」の場合）&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;1回のリクエストで照会できる明細は、総合振込照会明細情報または総合振込明細情報のいずれか最大500件です&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細が存在しない場合は「200：OK」とし明細を返却しません&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;取得できる明細数が500に満たないときは取得できる明細のみを返却します&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ページング&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;2ページ目以降を照会する際は、初回と同じリクエスト内容に、初回レスポンスの次明細キーまたは総合振込明細情報取得対象キーを追加してリクエストしてください&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;ソート順&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;明細情報取得フラグが、「False：取得しない」のとき&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;　振込照会対象期間区分の指定により下記となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:50px;&#39;&gt;1：振込申請受付日　第1ソート：振込申請日昇順　第２ソート：振込申請番号昇順&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:50px;&#39;&gt;2：振込指定日　　　第1ソート：振込指定日昇順　第２ソート：振込申請番号昇順&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:50px;&#39;&gt;※振込照会対象期間区分の指定がない場合は、1：振込申請受付日と同じとします&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;明細情報取得フラグが、「True：取得する」のとき&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;　明細番号の昇順&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;width:600px; margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;対象期間&lt;/p&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px; background-color:#29659b;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff;&#39;&gt;日本語名&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9312;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9313;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9314;&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; text-align:center; font-size:120%; color:#fff;&#39;&gt;&amp;#9315;&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間From&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt;   &lt;div style&#x3D;&#39;display:table; margin-left:20px;&#39;&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:160px; padding:9px; border:1px solid #fff; color:#fff; background-color:#29659b;&#39;&gt;対象期間To&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;×&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;     &lt;div style&#x3D;&#39;display:table-cell; width:80px; padding:9px; border:1px solid #fff; background-color:#f8f8f8; font-size:120%; text-align:center;&#39;&gt;○&lt;/div&gt;   &lt;/div&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;ul&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9312;の場合　当日分の明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9313;の場合　対象期間From　～　当日までの明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9314;の場合　取引初回　～　対象期間Toまでの明細を返却&lt;/li&gt;     &lt;li style&#x3D;&#39;list-style-type:none;&#39;&gt;&amp;#9315;の場合　対象期間From　～　対象期間Toまでの明細を返却&lt;/li&gt;  &lt;li style&#x3D;&#39;list-style-type:none; margin-left:10px;&#39;&gt;※現在契約中の総合振込サービスのみ照会可能となります&lt;/li&gt;  &lt;/ul&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin-bottom:40px;&#39; /&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;照会対象ステータス&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;申請中以降のステータスで照会が可能となります&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;依頼中、作成中の状態は照会対象外です&lt;/p&gt; &lt;/div&gt; &lt;div style&#x3D;&#39;margin:10px;&#39;&gt;   &lt;p style&#x3D;&#39;font-weight:bold; color:#616161;&#39;&gt;照会対象となる明細&lt;/p&gt;   &lt;p style&#x3D;&#39;padding-left:20px;&#39;&gt;総合振込・およびその予約の履歴と状況が照会対象となります（APIからの依頼結果のみではありません）&lt;/p&gt; &lt;/div&gt; 

### Example
```javascript
var GmoAozoraNetBankOpenApi = require('gmo_aozora_net_bank_open_api');

var apiInstance = new GmoAozoraNetBankOpenApi.BulkTransferApi();

var accountId = "accountId_example"; // String | 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29 

var queryKeyClass = "queryKeyClass_example"; // String | 照会対象キー区分 半角数字 照会対象のキー 1：振込申請照会対象指定、2：振込一括照会対象指定  minLength: 1 maxLength: 1 

var xAccessToken = "xAccessToken_example"; // String | アクセストークン  minLength: 1 maxLength: 128 

var opts = { 
  'detailInfoNecessity': true, // Boolean | 明細情報取得フラグ 総合振込明細情報の取得要否 照会対象キー区分が、1のときは「True：取得する」を指定可 それ以外で「True：取得する」が設定されている場合は、「400 Bad Request」を返却 True：取得する、False:取得しない　省略/NULLは　false扱い 
  'bulktransferItemKey': "bulktransferItemKey_example", // String | 総合振込明細情報取得対象キー 半角数字 明細情報取得フラグが、「True：取得する」のとき指定可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 総合振込明細情報を取得するときに取得を開始する番号 明細情報取得フラグが、「True：取得する」のときの省略/NULLは1扱い 1500明細を取得する場合、は以下のように設定 1電文目：1 2電文目：501 3電文目：1001  minLength: 1 maxLength: 6 
  'applyNo': "applyNo_example", // String | 受付番号（振込申請番号） 半角数字 照会対象の番号を設定 照会対象キー区分が、1のときは必須 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 16 maxLength: 16 
  'dateFrom': "dateFrom_example", // String | 対象期間From 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）              minLength: 10 maxLength: 10 
  'dateTo': "dateTo_example", // String | 対象期間To 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10 
  'nextItemKey': "nextItemKey_example", // String | 次明細キー 半角数字 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）              minLength: 1 maxLength: 24 
  'requestTransferStatus': ["requestTransferStatus_example"], // [String] | 照会対象ステータス  半角数字  2:申請中、3:差戻、4:取下げ、5:期限切れ、8:承認取消/予約取消、  11:予約中、12:手続中、13:リトライ中、  20:手続済、30:不能・組戻あり、40:手続不成立   照会対象キー区分が、2のときは設定可  それ以外は設定しません（値が設定されている場合は、「400 Bad Request」を返却）  配列のため、複数設定した場合は対象のステータスをOR条件で検索します  省略した場合は全てを設定したものとみなします  minLength: 1 maxLength: 3 
  'requestTransferClass': "requestTransferClass_example", // String | 振込照会対象取得区分 半角数字 1：ALL、2：振込申請のみ、3：振込受付情報のみ 照会対象キー区分が2かつ、ビジネスID管理利用中の場合のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1 
  'requestTransferTerm': "requestTransferTerm_example" // String | 振込照会対象期間区分 半角数字 対象期間Fromと対象期間Toで指定する日付の区分 1：振込申請受付日　2：振込指定日 照会対象キー区分が2のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bulkTransferStatusUsingGET(accountId, queryKeyClass, xAccessToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| 口座ID 半角数字 口座を識別するID  minLength: 12 maxLength: 29  | 
 **queryKeyClass** | **String**| 照会対象キー区分 半角数字 照会対象のキー 1：振込申請照会対象指定、2：振込一括照会対象指定  minLength: 1 maxLength: 1  | 
 **xAccessToken** | **String**| アクセストークン  minLength: 1 maxLength: 128  | 
 **detailInfoNecessity** | **Boolean**| 明細情報取得フラグ 総合振込明細情報の取得要否 照会対象キー区分が、1のときは「True：取得する」を指定可 それ以外で「True：取得する」が設定されている場合は、「400 Bad Request」を返却 True：取得する、False:取得しない　省略/NULLは　false扱い  | [optional] 
 **bulktransferItemKey** | **String**| 総合振込明細情報取得対象キー 半角数字 明細情報取得フラグが、「True：取得する」のとき指定可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 総合振込明細情報を取得するときに取得を開始する番号 明細情報取得フラグが、「True：取得する」のときの省略/NULLは1扱い 1500明細を取得する場合、は以下のように設定 1電文目：1 2電文目：501 3電文目：1001  minLength: 1 maxLength: 6  | [optional] 
 **applyNo** | **String**| 受付番号（振込申請番号） 半角数字 照会対象の番号を設定 照会対象キー区分が、1のときは必須 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  minLength: 16 maxLength: 16  | [optional] 
 **dateFrom** | **String**| 対象期間From 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）              minLength: 10 maxLength: 10  | [optional] 
 **dateTo** | **String**| 対象期間To 半角文字 YYYY-MM-DD形式 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 対象期間Fromと対象期間Toを指定する場合は、対象期間From≦対象期間Toとし、それ以外は「400 Bad Request」を返却  minLength: 10 maxLength: 10  | [optional] 
 **nextItemKey** | **String**| 次明細キー 半角数字 照会対象キー区分が、2のときは入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）              minLength: 1 maxLength: 24  | [optional] 
 **requestTransferStatus** | [**[String]**](String.md)| 照会対象ステータス  半角数字  2:申請中、3:差戻、4:取下げ、5:期限切れ、8:承認取消/予約取消、  11:予約中、12:手続中、13:リトライ中、  20:手続済、30:不能・組戻あり、40:手続不成立   照会対象キー区分が、2のときは設定可  それ以外は設定しません（値が設定されている場合は、「400 Bad Request」を返却）  配列のため、複数設定した場合は対象のステータスをOR条件で検索します  省略した場合は全てを設定したものとみなします  minLength: 1 maxLength: 3  | [optional] 
 **requestTransferClass** | **String**| 振込照会対象取得区分 半角数字 1：ALL、2：振込申請のみ、3：振込受付情報のみ 照会対象キー区分が2かつ、ビジネスID管理利用中の場合のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1  | [optional] 
 **requestTransferTerm** | **String**| 振込照会対象期間区分 半角数字 対象期間Fromと対象期間Toで指定する日付の区分 1：振込申請受付日　2：振込指定日 照会対象キー区分が2のときのみ入力可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 照会対象キー区分が、2のときに指定しない場合は1と扱います  minLength: 1 maxLength: 1  | [optional] 

### Return type

[**BulkTransferStatusResponse**](BulkTransferStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

