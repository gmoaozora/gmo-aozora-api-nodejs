# GmoAozoraNetBankOpenApi.TransferCancelRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | 口座ID 半角英数字 口座を識別するID  | 
**cancelTargetKeyClass** | **String** | 取消対象キー区分 半角英数値 取消対象の取引の内容について指定します 1:振込申請取消　2:振込受付取消　3:総合振込申請取消　4:総合振込受付取消 取消対象キー区分と、取消対象の振込申請番号の状態がマッチしない場合は、「400 Bad Request」を返却  | 
**applyNo** | **String** | 受付番号（振込申請番号） 半角数字 取り消し対象の番号を設定  | 


