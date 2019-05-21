# GmoAozoraNetBankOpenApi.TransferCancelResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | 口座ID 半角英数字 口座を識別するID  | 
**cancelTargetKeyClass** | **String** | 取消対象キー区分 半角英数値 1:振込申請取消　2:振込受付取消　3:総合振込申請取消　4:総合振込受付取消  | 
**resultCode** | **String** | 結果コード 半角数字 1:完了　2：未完了  | 
**applyNo** | **String** | 受付番号（振込申請番号） 半角数字 取り消し対象の番号  | 
**applyEndDatetime** | **String** | 振込依頼完了日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式 結果コードが、1:完了のときのみセット このリクエストの依頼が完了した日時を返却 それ以外は項目自体を設定しません  | [optional] 


