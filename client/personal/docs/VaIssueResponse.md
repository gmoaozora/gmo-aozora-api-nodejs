# GmoAozoraNetBankOpenApi.VaIssueResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vaTypeCode** | **String** | 振込入金口座　種類コード 半角数字 ・1&#x3D;期限型 ・2&#x3D;継続型  | 
**vaTypeName** | **String** | 振込入金口座　種類名 全角文字 振込入金口座　種類コードの名称  | 
**expireDateTime** | **String** | 有効期限日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式 振込入金口座種別コードが「2&#x3D;継続型」の場合は、項目自体を設定しません  | [optional] 
**vaHolderNameKana** | **String** | 振込入金口座名義カナ 半角文字  | 
**vaList** | [**[Va]**](Va.md) | 振込入金口座リスト | 


