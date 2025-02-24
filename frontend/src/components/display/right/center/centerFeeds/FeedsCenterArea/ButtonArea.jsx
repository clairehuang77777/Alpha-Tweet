import { useLocation } from "react-router"
import { images } from "../../../../../../assets/images"

export const ButtonArea = ({item}) => {
  const location = useLocation()
  let replyNum = null
  let likeNum = null

  if (location.pathname.startsWith("/user/U")){
    replyNum = item.UserFollowingCountPostReply
    likeNum = item.UserFollowingCountPostLike
  } else if (location.pathname.startsWith("/user/likes")){
    replyNum = item.CountPostReply
    likeNum = item.CountPostLike
  }

  return (
    <>
          <div className="feeds-poster-ReplyArea">
            <img className="feeds-poster-ReplyIcon" src={images.comment}></img>
            <div className="feeds-poster-ReplyNumber">{replyNum || 0 }</div>
          </div>
          <div className="feeds-poster-heartArea">
            <img className="feeds-poster-heartIcon" src={images.heart}></img>
            <div className="feeds-poster-heartNumber" >{likeNum || 0}</div>
          </div>
    </>
  )
}