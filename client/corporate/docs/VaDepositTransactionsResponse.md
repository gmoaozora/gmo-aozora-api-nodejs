# GmoAozoraNetBankOpenApi.VaDepositTransactionsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raId** | **String** | 入金口座ID 半角数字 入金先の口座を識別するID  | 
**raBranchCode** | **String** | 入金口座　支店コード 半角数字  | 
**raBranchNameKana** | **String** | 入金口座　支店名カナ 半角文字  | 
**raAccountNumber** | **String** | 入金口座　口座番号 半角数字  | 
**raHolderName** | **String** | 入金口座　口座名義（漢字） 全角文字  | 
**dateFrom** | **String** | 対象期間From 半角文字 YYYY-MM-DD形式 リクエストに対象期間From、Toが設定されていない場合は当日日付が設定されます  | 
**dateTo** | **String** | 対象期間To 半角文字 YYYY-MM-DD形式 リクエストに対象期間From、Toが設定されていない場合は当日日付が設定されます  | 
**baseDate** | **String** | 基準日 半角文字 入金明細を照会した基準日を示します YYYY-MM-DD形式  | 
**baseTime** | **String** | 基準時刻 半角文字 入金明細を照会した基準時刻を示します HH:MM:SS+09:00形式  | 
**hasNext** | **Boolean** | 次明細フラグ ・true&#x3D;次明細あり ・false&#x3D;次明細なし  | 
**nextItemKey** | **String** | 次明細キー 半角数字 次明細フラグがfalseの場合は、項目自体を設定しません  | [optional] 
**count** | **String** | 明細取得件数 半角数字  | 
**vaTransactions** | [**[VaTransaction]**](VaTransaction.md) | 振込入金口座入金明細情報リスト 該当する情報が無い場合は、空のリストを返却します  | [optional] 


