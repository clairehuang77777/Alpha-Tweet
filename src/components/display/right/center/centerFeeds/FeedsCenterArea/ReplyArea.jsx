import { useNavigate } from "react-router-dom"

export const ReplyArea = ({displayReplyeeName}) =>
{
  const navigate = useNavigate()

  function handleOtherBtn(){
    navigate('/user/other')
  }

  return (
    <>
          <div className="feeds-RightCenterReplyArea-reply">回覆</div>
          <div className="feeds-RightCenterReplyArea-replyPerson"
          onClick={handleOtherBtn}>@{displayReplyeeName || "Unknown"}</div>
    </>
  )
}