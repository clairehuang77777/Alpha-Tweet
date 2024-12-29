import { ButtonArea } from "./FeedsCenterArea/ButtonArea"

export const CenterFeed = ({ item, RightCenterReplyArea, RightCenterButtonArea}) => {

  return (
  
      <div className="feeds">
        <div className="feeds-LeftArea">
          <img className="feeds-user-photo" src={item.photoSrc || item.PostUserSrc} alt="user=photo"></img>
        </div>
        <div className="feeds-RightArea">
          <div className="feeds-RightTopArea">
            <div className="feeds-poster-name">{item.UserFollowingUserName || item.UserName ||item.PostUserName}</div>
            <div className="feeds-poster-id">{item.UserFollowingIDname || item.UserIDname}</div>
            <div className="feeds-poster-time">∙ {item.PostTime || item.ReplierTime}</div>
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
