# GmoAozoraNetBankOpenApi.TransferInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transferAmount** | **String** | 振込金額 半角数字 1以上,整数のみ  | [optional] 
**ediInfo** | **String** | EDI情報 半角文字 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**beneficiaryBankCode** | **String** | 被仕向金融機関番号 半角数字  | [optional] 
**beneficiaryBankName** | **String** | 被仕向金融機関名カナ 半角文字  | [optional] 
**beneficiaryBranchCode** | **String** | 被仕向支店番号 半角数字  | [optional] 
**beneficiaryBranchName** | **String** | 被仕向支店名カナ 半角文字  | [optional] 
**accountTypeCode** | **String** | 科目コード（預金種別コード） 半角数字 1：普通、2：当座、4：貯蓄、9：その他  | [optional] 
**accountNumber** | **String** | 口座番号 半角数字 7桁未満の番号は右詰で、前ゼロで埋めること  | [optional] 
**beneficiaryName** | **String** | 受取人名 半角文字 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**transferDetailResponses** | [**[TransferDetailResponse]**](TransferDetailResponse.md) | 振込明細結果 振込明細結果のリスト 正常時のみ応答 該当する情報が無い場合は空のリストを返却  | [optional] 
**unableDetailInfos** | [**[UnableDetailInfo]**](UnableDetailInfo.md) | 不能明細情報 不能明細情報のリスト 該当する情報が無い場合は項目自体を設定しません  | [optional] 


