# GmoAozoraNetBankOpenApi.AccountsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseDate** | **String** | 基準日 半角文字 一覧照会の基準日を示します YYYY-MM-DD形式  | 
**baseTime** | **String** | 基準時刻 半角文字 一覧照会の基準時刻を示します HH:MM:SS+09:00形式  | 
**accounts** | [**[Account]**](Account.md) | 口座情報リスト  | 
**spAccounts** | [**[SpAccount]**](SpAccount.md) | つかいわけ口座情報リスト 該当する情報が無い場合は、項目自体を設定しません  | [optional] 


