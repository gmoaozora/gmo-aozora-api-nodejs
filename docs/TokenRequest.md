
# TokenRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grantType** | **String** | 新規発行時はauthorization_code固定。再発行時はrefresh_token固定。 | 
**code** | **String** | 新規発行時のみ必須 認可エンドポイントにて当社から返却した認可コード  minLength: 1 maxLength: 128  | 
**refreshToken** | **String** | 再発行時のみ必須 トークンエンドポイント(新規発行)にて当社から返却したリフレッシュトークン。  minLength: 1 maxLength: 128  |  [optional]
**redirectUri** | **String** | 新規発行時のみ必須 貴社が指定する認可コードをリダイレクトするためのURI。 事前に登録済みのリダイレクトURIであることが必要、それ以外の場合はエラーとする。 ※認可エンドポイント要求時の「redirect_uri」と同じ値。  minLength: 1 maxLength: 256  |  [optional]
**clientId** | **String** | クライアントID。(貴社認証用の項目) (当社が事前に発行する貴社向けのID) 事前に登録する「クライアント認証方式」にclient_secret_basic(ベーシック認証)を設定した場合、設定不要。 「クライアント認証方式」にclient_secret_post(パラメーター認証)を設定した場合、必須。  minLength: 1 maxLength: 128  |  [optional]
**clientSecret** | **String** | クライアントシークレット。(貴社認証用の項目) (当社が事前に発行する貴社向けのID) 事前に登録する「クライアント認証方式」にclient_secret_basic(ベーシック認証)を設定した場合、設定不要。 「クライアント認証方式」にclient_secret_post(パラメーター認証)を設定した場合、必須。  minLength: 1 maxLength: 128  |  [optional]



