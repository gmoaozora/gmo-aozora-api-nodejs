# GmoAozoraNetBankOpenApi.VAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vaId** | **String** | 振込入金口座ID 半角数字 振込入金口座を識別するID  | 
**vaBranchCode** | **String** | 支店コード 半角数字  | 
**vaBranchName** | **String** | 支店名 全角文字  | 
**vaBranchNameKana** | **String** | 支店名カナ 半角文字  | 
**vaAccountNumber** | **String** | 口座番号 半角数字  | 
**vaHolderNameKana** | **String** | 口座名義カナ 半角文字  | 
**vaTypeCode** | **String** | 振込入金口座　種類コード 半角数字 ・1&#x3D;期限型 ・2&#x3D;継続型  | 
**vaTypeName** | **String** | 振込入金口座　種類名 全角文字 振込入金口座　種類コードの名称  | 
**vaStatusCode** | **String** | 振込入金口座　状態コード 半角数字 ・1&#x3D;利用可能 ・2&#x3D;停止中 ・3&#x3D;削除済  | 
**vaStatusName** | **String** | 振込入金口座　状態名 全角文字 振込入金口座　状態コードの名称  | 
**vaStatusChangePossibleCode** | **String** | 振込入金口座　状態変更可能コード 半角数字 現在の口座状態から変更可能な口座状態を表したコード値 ・1&#x3D;停止・削除 ・2&#x3D;再開・削除 ・3&#x3D;該当なし  | 
**vaIssueDateTime** | **String** | 発行日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式  | 
**vaChangeStatusDateTime** | **String** | 状態変更日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式 状態が変更されている場合のみ設定されます 該当しない場合は項目自体を設定しません  | [optional] 
**vaCloseDateTime** | **String** | 削除日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式 状態コードが以下の場合のみ設定されます 該当しない場合は項目自体を設定しません ・3&#x3D;削除済  | [optional] 
**expireDateTime** | **String** | 有効期限日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式 種類コードが以下の場合のみ設定されます 該当しない場合は項目自体を設定しません ・2&#x3D;期限型  | [optional] 
**latestDepositDate** | **String** | 最終入金日 半角文字 YYYY-MM-DD形式 入金がない場合は項目自体を設定しません  | [optional] 
**latestDepositAmount** | **String** | 最終入金金額 半角数字 入金がない場合は項目自体を設定しません  | [optional] 
**latestDepositCount** | **String** | 最終入金日入金回数 半角数字 入金がない場合は項目自体を設定しません  | [optional] 
**raId** | **String** | 入金口座ID 半角数字 入金先の口座を識別するID  | 
**raBranchCode** | **String** | 入金口座　支店コード 半角数字  | 
**raBranchName** | **String** | 入金口座　支店名 全角文字  | 
**raAccountNumber** | **String** | 入金口座　口座番号 半角数字  | 
**raHolderName** | **String** | 入金口座名義 全角文字  | 


