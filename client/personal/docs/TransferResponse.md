# GmoAozoraNetBankOpenApi.TransferResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | 口座ID 半角数字 口座を識別するID 引き落とし元となる口座情報  | [optional] 
**remitterName** | **String** | 振込依頼人名 半角文字  | [optional] 
**transferDesignatedDate** | **String** | 振込指定日 半角文字 YYYY-MM-DD形式  | [optional] 
**transferInfos** | [**[TransferInfo]**](TransferInfo.md) | 振込情報 振込情報のリスト 該当する情報が無い場合は空のリストを返却  | [optional] 


