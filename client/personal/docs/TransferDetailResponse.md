# GmoAozoraNetBankOpenApi.TransferDetailResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiaryBankNameKanji** | **String** | 被仕向金融機関名漢字 全角文字 被仕向金融機関番号に該当する金融機関名漢字 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**beneficiaryBranchNameKanji** | **String** | 被仕向支店名漢字 全角文字 被仕向支店番号に該当する支店名漢字 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**usedPoint** | **String** | 利用ポイント 半角数字 実際に利用したポイント 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**isFeeFreeUsed** | **Boolean** | 振込無料回数利用有無 振込無料回数の実際の利用有無 総合振込では無料回数は利用できないため、常にfalse  | [optional] 
**transferFee** | **String** | 手数料 半角数字 個別明細単位の手数料 該当する情報が無い場合は項目自体を設定しません  | [optional] 


