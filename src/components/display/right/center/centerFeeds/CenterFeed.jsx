import { ButtonArea } from "./FeedsCenterArea/ButtonArea"

export const CenterFeed = ({RightCenterReplyArea, RightCenterButtonArea, username, userid, coverphoto,postcontent}) => {
  return (
    <div className="feeds">
      <div className="feeds-LeftArea">
        <img className="feeds-user-photo" src={coverphoto} alt="user=photo"></img>
      </div>
      <div className="feeds-RightArea">
        <div className="feeds-RightTopArea">
          <div className="feeds-poster-name">{username}</div>
          <div className="feeds-poster-id">{userid}</div>
          <div className="feeds-poster-time">∙ 3 小時前</div>
        </div>
        <div className="feeds-RightCenterReplyArea">{RightCenterReplyArea}</div>
        <div className="feeds-RightCenterArea">
          <div className="feeds-poster-content">{postcontent}</div>
        </div>
        <div className="feeds-RightButtonArea">
          {RightCenterButtonArea}
        </div>
      </div>
    </div>

  )
}