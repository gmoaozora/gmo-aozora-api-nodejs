# GmoAozoraNetBankOpenApi.TransferDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transferStatus** | **String** | 振込ステータス 半角数字 2:申請中、3:差戻、4:取下げ、5:期限切れ、8:承認取消/予約取消、 11:予約中、12:手続中、13:リトライ中、 20:手続済、22:資金返却、24:組戻手続中、25:組戻済、26:組戻不成立、 40:手続不成立  | [optional] 
**transferStatusName** | **String** | 振込ステータス名 全角文字  | [optional] 
**transferTypeName** | **String** | 種類 全角文字 振込振替　または　定額自動振込　を表示  | [optional] 
**isFeeFreeUse** | **Boolean** | 振込無料回数利用可否 振込利用回数の利用可否（無料回数の利用可否の設定であり、実際の利用有無ではありません）  | [optional] 
**isFeePointUse** | **Boolean** | ポイント利用可否 ポイント会社の利用可否  | [optional] 
**pointName** | **String** | ポイント会社名 全角文字 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**feeLaterPaymentFlg** | **Boolean** | 手数料後払区分 「true&#x3D;後払い」以外の場合は項目自体を設定しません  | [optional] 
**transferDetailFee** | **String** | 明細手数料 半角数字 振り込み完了時以外は、予定の手数料  | [optional] 
**totalDebitAmount** | **String** | 合計出金金額 半角数字 手数料+振込金額　ただし、振込完了時以外は、予定の手数料  | [optional] 
**transferApplies** | [**[TransferApply]**](TransferApply.md) | 振込申請情報 振込申請情報のリスト  | [optional] 
**transferAccepts** | [**[TransferAccept]**](TransferAccept.md) | 振込受付情報 振込受付情報のリスト 該当する情報が無い場合は空のリストを返却  | [optional] 
**transferResponses** | [**[TransferResponse]**](TransferResponse.md) | 振込レスポンス情報 振込レスポンス情報のリスト 該当する情報が無い場合は空のリストを返却  | [optional] 


