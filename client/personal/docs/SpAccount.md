# GmoAozoraNetBankOpenApi.SpAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | 口座ID 半角英数字 つかいわけ口座を識別するID  | 
**spAccountTypeCode** | **String** | つかいわけ口座種別コード 半角数字 ・1&#x3D;親口座 ・2&#x3D;子口座  | 
**spAccountTypeCodeName** | **String** | つかいわけ口座種別コード名称 全角文字 つかいわけ口座種別コードの名称  | 
**spAccountName** | **String** | つかいわけ口座名 全半角英数記号文字  | 
**spAccountBranchCode** | **String** | 支店コード 半角数字 つかいわけ口座種別コードが「2&#x3D;子口座」の場合のみ設定 該当しない場合は項目自体を設定しません  | [optional] 
**spAccountBranchName** | **String** | 支店名 全角文字 つかいわけ口座種別コードが「2&#x3D;子口座」の場合のみ設定 該当しない場合は項目自体を設定しません  | [optional] 
**spAccountNumber** | **String** | 口座番号 半角数字 つかいわけ口座種別コードが「2&#x3D;子口座」の場合のみ設定 該当しない場合は項目自体を設定しません  | [optional] 


