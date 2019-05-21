# GmoAozoraNetBankOpenApi.Transfer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **String** | 明細番号 半角数字 重複/0はエラー　1～99の範囲で１からの連番とします 1件のみの場合は省略可（項目自体の設定が不要です）  | [optional] 
**transferAmount** | **String** | 振込金額 半角数字 1以上、整数のみ  | 
**ediInfo** | **String** | EDI情報 半角文字 振込許容文字を指定可  | [optional] 
**beneficiaryBankCode** | **String** | 被仕向金融機関番号 半角数字  | 
**beneficiaryBankName** | **String** | 被仕向金融機関名カナ 半角文字 参考値、処理に利用しません  | [optional] 
**beneficiaryBranchCode** | **String** | 被仕向支店番号 半角数字  | 
**beneficiaryBranchName** | **String** | 被仕向支店名カナ 半角文字 参考値、処理に利用しません  | [optional] 
**accountTypeCode** | **String** | 科目コード（預金種別コード） 半角数字 1：普通、2：当座、4：貯蓄、9：その他  | 
**accountNumber** | **String** | 口座番号 半角数字 7桁未満の番号は右詰で、前ゼロで埋めること  | 
**beneficiaryName** | **String** | 受取人名 半角文字 振込許容文字を指定可 ただし、一部の非許容文字は、許容文字に変換を行います  | 


