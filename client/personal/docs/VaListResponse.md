# GmoAozoraNetBankOpenApi.VaListResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseDate** | **String** | 基準日 半角文字 一覧照会の基準日を示します YYYY-MM-DD形式  | 
**baseTime** | **String** | 基準時刻 半角文字 一覧照会の基準時刻を示します HH:MM:SS+09:00形式  | 
**hasNext** | **Boolean** | 次一覧フラグ ・true&#x3D;次一覧あり ・false&#x3D;次一覧なし  | 
**nextItemKey** | **String** | 次一覧キー 半角英数字 次一覧フラグがfalseの場合は項目自体を設定しません  | [optional] 
**count** | **String** | 口座取得件数 半角数字  | 
**vAccounts** | [**[VAccount]**](VAccount.md) | 振込入金口座情報 振込入金口座情報のリスト 該当する情報が無い場合は空のリストを返却  | [optional] 


