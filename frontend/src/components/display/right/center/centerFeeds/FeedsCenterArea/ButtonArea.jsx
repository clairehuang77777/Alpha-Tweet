import { useLocation } from "react-router"
import { images } from "../../../../../../assets/images"
import { popUpContext } from "../../../../../../popUpContext"
import {useContext} from "react"
import { updateHeartNum } from "../../../../../../../../backend/api/alphatwitter"
import { useNavigate } from "react-router"
import { clsx } from "clsx"

export const ButtonArea = ({item}) => {
  const location = useLocation()
  let replyNum = null
  let likeNum = null

  //取得按讚的貼文ID
  const{heartAUDY, setHeartAUDY} = useContext(popUpContext)
  console.log(heartAUDY)
  console.log(typeof heartAUDY)

  const navigate = useNavigate()

  if (location.pathname.startsWith("/user/U") || location.pathname.startsWith("/")){
    replyNum = item.UserFollowingCountPostReply
    likeNum = item.UserFollowingCountPostLike
  } else if (location.pathname.startsWith("/user/likes")) {
    replyNum = item.CountPostReply
    likeNum = item.CountPostLike
  }

  //判斷這篇文章是否有被按讚
  const isLiked = heartAUDY && heartAUDY.includes(item.PID)
  console.log(isLiked)

  async function handleHeartClick(itemPID){
    if (heartAUDY.includes(itemPID)){
      likeNum = likeNum - 1 
    } else {
       likeNum = likeNum + 1 
    }
    // likeNum = likeNum + 1 
    console.log(likeNum)
    //要把這個新的數字更新到資料庫
    try {
      const res = await updateHeartNum(likeNum, item.PID)
      console.log(res)
      if (res.data === "update succeed!"){
        //成功加入資料庫後, 把item.PID push進去陣列
        //如果已經按讚過，從紅心陣列中移除
        //如果還沒按讚過，加入紅心陣列
        if (isLiked){
          setHeartAUDY(heartAUDY.filter((itemPID)=> itemPID !== item.PID))
        } else {
          setHeartAUDY([...heartAUDY, item.PID])
        }
        console.log(heartAUDY)
        //跳轉回userSelfPage
        if(location.pathname.startsWith("/user/U")) {
          navigate("/user/U01")
        } else if (location.pathname.startsWith("/")){
          navigate("/")
        }
      }
    }
    catch(error){
      console.error(['updateHeartNum failded'],error)
    }
  }

  return (
    <>
          <div className="feeds-poster-ReplyArea">
            <img className="feeds-poster-ReplyIcon" src={images.comment}></img>
            <div className="feeds-poster-ReplyNumber">{replyNum || 0 }</div>
          </div>
          <div className="feeds-poster-heartArea" onClick={()=>handleHeartClick(item.PID)}>
            <img className={clsx("feeds-poster-heartIcon",{"red":isLiked})} src={isLiked ?images.red_heart : images.heart}></img>
            <div className="feeds-poster-heartNumber" >{likeNum || 0}</div>
          </div>
    </>
  )
}