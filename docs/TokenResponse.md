
# TokenResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **String** | アクセストークン。 各APIを要求する際「x-access-token」に設定する値。  | 
**refreshToken** | **String** | 新しいアクセストークンを取得する際に使用するリフレッシュトークン。  | 
**scope** | **String** | アクセストークンに紐付く許諾されたスコープ。 | 
**tokenType** | **String** | アクセストークンに紐付く許諾されたスコープ。 | 
**expiresIn** | **String** | アクセストークンの有効期限。(秒単位) | 
**idToken** | **String** | IDトークン。 JWT形式で応答される。 |  [optional]



