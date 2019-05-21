# GmoAozoraNetBankOpenApi.VaListRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vaContractAuthKey** | **String** | 振込入金口座API認証情報 半角英数字 NULLを設定 値が設定されている場合は「400 Bad Request」を返却  | [optional] 
**vaTypeCode** | **String** | 振込入金口座　種類コード 半角数字 ・1&#x3D;期限型 ・2&#x3D;継続型  | [optional] 
**depositAmountExistCode** | **String** | 入金有無コード 半角数字 ・1&#x3D;入金あり ・2&#x3D;入金なし  | [optional] 
**vaHolderNameKana** | **String** | 振込入金口座名義カナ 半角文字 振込許容文字を指定可 ただし、一部の非許容文字は、許容文字に変換を行います  | [optional] 
**vaStatusCodeList** | [**[VaStatusCode]**](VaStatusCode.md) | 振込入金口座IDリスト 照会したい振込入金口座状態コードのリスト 上限3件まで設定可能  | [optional] 
**latestDepositDateFrom** | **String** | 最終入金日From 半角文字 YYYY-MM-DD形式 入金有無コードが未設定もしくは、「1&#x3D;入金あり」が設定されている場合は指定可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  | [optional] 
**latestDepositDateTo** | **String** | 最終入金日To 半角文字 YYYY-MM-DD形式 入金有無コードが未設定もしくは、「1&#x3D;入金あり」が設定されている場合は指定可 それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却） 最終入金日Fromと最終入金日Toを指定する場合は、最終入金日From≦最終入金日Toとし、それ以外は「400 Bad Request」を返却  | [optional] 
**vaIssueDateFrom** | **String** | 振込入金口座発行日From 半角文字 YYYY-MM-DD形式  | [optional] 
**vaIssueDateTo** | **String** | 振込入金口座発行日To 半角文字 YYYY-MM-DD形式 振込入金口座発行Fromと振込入金口座発行Toを指定する場合は、振込入金口座発行From≦振込入金口座発行Toとし、それ以外は「400 Bad Request」を返却  | [optional] 
**expireDateFrom** | **String** | 有効期限From 半角文字 YYYY-MM-DD形式 振込入金口座 種類コードが未設定もしくは、「1＝期限型」が設定されている場合は指定可　それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  | [optional] 
**expireDateTo** | **String** | 有効期限To 半角文字 YYYY-MM-DD形式 振込入金口座 種類コードが未設定もしくは、「1＝期限型」が設定されている場合は指定可　それ以外はNULLを設定（値が設定されている場合は、「400 Bad Request」を返却）  | [optional] 
**raId** | **String** | 入金口座ID 半角数字 口座一覧照会APIで取得できる口座IDを設定 科目コードが以下の口座IDのみ受け付けます ・01&#x3D;普通預金（有利息） ・02&#x3D;普通預金（決済用）  | [optional] 
**nextItemKey** | **String** | 次一覧キー 半角英数字  | [optional] 
**sortItemCode** | **String** | ソート項目コード 半角数字 ・1&#x3D;有効期限日時 ・2&#x3D;最終入金日 ・3&#x3D;発行日時 ・4&#x3D;最終入金金額 有効期限日時、最終入金日、最終入金金額など、レスポンスで返却されない場合がある項目をソート項目に指定した場合、ソートは効きません  | [optional] 
**sortOrderCode** | **String** | ソート順コード 半角数字 ソート項目コードのソート順を指定するコード値 ・1&#x3D;昇順 ・2&#x3D;降順  | [optional] 
**vaIdList** | [**[VaId]**](VaId.md) | 振込入金口座IDリスト 照会したい振込入金口座IDのリスト 上限500件まで設定可能  | [optional] 


