# GmoAozoraNetBankOpenApi.VaTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vaId** | **String** | 振込入金口座ID 半角数字 振込入金口座を識別するID  | 
**transactionDate** | **String** | 取引日 半角文字 YYYY-MM-DD形式  | 
**valueDate** | **String** | 起算日 半角文字 YYYY-MM-DD形式  | 
**vaBranchCode** | **String** | 支店コード 半角数字  | 
**vaBranchNameKana** | **String** | 支店名カナ 半角文字  | 
**vaAccountNumber** | **String** | 口座番号 半角数字  | 
**vaAccountNameKana** | **String** | 口座名義カナ 半角文字  | 
**depositAmount** | **String** | 入金金額 半角数字  | 
**remitterNameKana** | **String** | 振込依頼人名カナ 半角文字  | 
**paymentBankName** | **String** | 仕向金融機関名カナ 半角文字  | 
**paymentBranchName** | **String** | 仕向支店名カナ 半角文字  | 
**partnerName** | **String** | サービス企業名 全角文字 振込入金口座契約サービス企業名  | 
**remarks** | **String** | 摘要内容 全半角文字 該当データがない場合は項目自体を設定しません  | [optional] 
**itemKey** | **String** | 明細キー 半角数字 口座ID毎に設定される明細キー（明細データtimestamp（μs）） | 


