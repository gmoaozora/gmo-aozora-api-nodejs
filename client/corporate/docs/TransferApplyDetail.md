# GmoAozoraNetBankOpenApi.TransferApplyDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applyDatetime** | **String** | 振込申請受付日時 半角文字 YYYY-MM-DDTHH:MM:SS+09:00形式 この申請の受付日時 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**applyStatus** | **String** | 振込申請ステータス 半角数字 0：未申請、1：申請中、2：差戻、3：取下げ、4：期限切れ、5：承認済、6：承認取消、7：自動承認 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**applyUser** | **String** | 申請者 全半角文字 申請をしたユーザ名 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**applyComment** | **String** | 申請者コメント 全半角文字 申請したユーザのコメント 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**approvalUser** | **String** | 決裁者 全半角文字 承認をしたユーザ名 該当する情報が無い場合は項目自体を設定しません  | [optional] 
**approvalComment** | **String** | 決裁者コメント 全半角文字 承認をしたユーザのコメント 該当する情報が無い場合は項目自体を設定しません  | [optional] 


