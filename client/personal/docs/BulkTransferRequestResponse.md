# GmoAozoraNetBankOpenApi.BulkTransferRequestResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | 口座ID 半角英数字 口座を識別するID  | 
**resultCode** | **String** | 結果コード 半角数字 1:完了　2：未完了  | 
**applyNo** | **String** | 受付番号（振込申請番号） 半角数字 すべての振込・総合振込で採番される、照会の基本単位となる番号  | 
**applyEndDatetime** | **String** | 振込依頼完了日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式 結果コードが、1:完了のときのみセット それ以外は項目自体を設定しません  | [optional] 


