import { ButtonArea } from "./FeedsCenterArea/ButtonArea"
import { useState } from "react"

export const CenterFeed = ({ item, RightCenterReplyArea, RightCenterButtonArea, DeleteIconArea}) => {
  const [isLoadingUserPhoto, setIsLoadingUserPhoto] = useState(false)
  let formattedTimeReply =''
  let formattedTimeUser =''
  console.log(item)

// 處理日期格式
if (location.pathname.startsWith("/user/reply")) {
    const postTime = item.ReplierTime;
    if (postTime) { // 確認 postTime 存在且有效
        formattedTimeReply = new Date(postTime).toISOString().replace('T', ' ').slice(0, 16);
    }
} 
else if (location.pathname.startsWith("/")) {
    const postTime = item.PostTime;
    if (postTime) { // 同樣做有效性檢查
        formattedTimeUser = new Date(postTime).toISOString().replace('T', ' ').slice(0, 16);
    }
}


  return (
      <div className="feeds">
        <div className="feeds-LeftArea">
          <img className="feeds-user-photo" src={item.photoSrc || item.PostUserSrc} alt="" onLoad={()=>{setIsLoadingUserPhoto(true)}}></img>
          {!isLoadingUserPhoto && (<div className="placeholder-lazyloading-feedsUserPhoto"></div>)}
        </div>
        <div className="feeds-RightArea">
          <div className="feeds-RightTopArea">
            <div className="feeds-poster-name">{item.UserFollowingUserName || item.UserName ||item.PostUserName}</div>
            <div className="feeds-poster-id">{item.UserFollowingIDname || item.UserIDname}</div>
            <div className="feeds-poster-time">  {formattedTimeUser || formattedTimeReply || item.ReplierTime}</div>
            <div className={`feeds-poster-delete-icon-${item.PostID}`}>  
            {DeleteIconArea}
            </div>
          </div>
          <div className="feeds-RightCenterReplyArea">{RightCenterReplyArea}</div>
          <div className="feeds-RightCenterArea">
            <div className="feeds-poster-content">{item.PostContent || item.ReplierContent}</div>
          </div>
          <div className="feeds-RightButtonArea">
            {RightCenterButtonArea}
          </div>
        </div>
    </div>
   )
}
