# GmoAozoraNetBankOpenApi.TransferQueryBulkResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateFrom** | **String** | 対象期間From 半角文字 リクエストしたときと同じ内容 対象期間（From）をYYYY-MM-DD形式で設定  | [optional] 
**dateTo** | **String** | 対象期間To 半角文字 リクエストしたときと同じ内容 対象期間（To）をYYYY-MM-DD形式で設定  | [optional] 
**requestNextItemKey** | **String** | リクエスト時次明細キー 半角数字 リクエストしたときと同じ内容 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**requestTransferStatuses** | [**[RequestTransferStatus]**](RequestTransferStatus.md) | 振込一括照会対象ステータス 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**requestTransferClass** | **String** | 照会対象取得区分 半角数字 リクエストしたときと同じ内容 1：ALL、2：振込申請のみ、3：振込受付情報のみ 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**requestTransferTerm** | **String** | 振込照会対象期間区分 半角数字 リクエストしたときと同じ内容 1：振込申請受付日　2：振込指定日 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**hasNext** | **Boolean** | 次明細フラグ ・true&#x3D;次明細あり ・false&#x3D;次明細なし  | [optional] 
**nextItemKey** | **String** | 次明細キー 半角数字 次明細フラグがfalseの場合は項目自体を設定しません  | [optional] 


