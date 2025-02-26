import { useLocation } from "react-router"
import { images } from "../../../../../../assets/images"
import { popUpContext } from "../../../../../../popUpContext"
import {useContext} from "react"
import { updateHeartNum, getFeedByPID } from "../../../../../../../../backend/api/alphatwitter"
import { useNavigate } from "react-router"
import { clsx } from "clsx"
import { heartContext } from "../../../../../../heartContext"

export const ButtonArea = ({item}) => {
  const location = useLocation()
  let replyNum = null
  let likeNum = null

  //取得按讚的貼文ID
  const{heartAUDY, setHeartAUDY} = useContext(heartContext)
  const{theCommentPost, setTheCommentPost} = useContext(popUpContext)

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
      const res = await updateHeartNum(likeNum, itemPID)
      console.log(res)
      if (res.data === "update succeed!"){
        //成功加入資料庫後, 把item.PID push進去陣列
        //如果已經按讚過，從紅心陣列中移除
        //如果還沒按讚過，加入紅心陣列
        if (isLiked){
          setHeartAUDY(heartAUDY.filter((PID)=> PID !== itemPID))
        } else {
          setHeartAUDY([...heartAUDY, itemPID])
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

  async function handleReplyClick(itemPID){
    console.log(itemPID)
    localStorage.setItem("PID",itemPID)
    navigate(`/user/comment/${itemPID}`)
    //透過itemPID撈一整個item物件
    try {
      const item = await getFeedByPID(itemPID)
      console.log(item)
      const thepost = item.data
      setTheCommentPost(thepost)
      navigate(`/user/comment/${itemPID}`)
    }
    catch(error){
      console.error(error)
    }
  }

  return (
    <>
          <div className="feeds-poster-ReplyArea" onClick={()=>handleReplyClick(item.PID)}>
            <picture>
            <source srcset={images.comment_dark} media="(prefers-color-scheme: dark)"></source>
            <img className="feeds-poster-ReplyIcon" src={images.comment}></img>
            </picture>
          </div>
          <div className="feeds-poster-heartArea" onClick={()=>handleHeartClick(item.PID)}>
          <picture>
            <source srcset={images.heart_dark} media="(prefers-color-scheme: dark)"></source>
            <img className={clsx("feeds-poster-heartIcon",{"red":isLiked})} src={isLiked ?images.red_heart : images.heart}></img>
          </picture>
            <div className="feeds-poster-heartNumber" >{likeNum || 0}</div>
          </div>
    </>
  )
}