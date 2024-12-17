export const CenterIntro = ({editBtnZone,username,userid,userquote,coverphoto,countOfFollowing,countOfFollower,headerPhoto}) => {
  return (
    <div className="Intro">
      <div className="Intro-header-piczone">
        <img className="intro-header-pic" src={headerPhoto} alt="intro-header-photo"></img>
      </div>
      <div className="Intro-user-pic-zone">
        <img className="Intro-user-pic" src={coverphoto} alt="Intro-user-pic"></img>
      </div>
      <div className="Intro-user-edit-btn-zone">
        {editBtnZone}
      </div>
      <div className="Intro-usernameid">
        <div className="Intro-username">{username}</div>
        <div className="Intro-id">{userid}</div>
      </div>
      <div className="Intro-user-introduction">
        <p>{userquote}</p>
      </div>
      <div className="Intro-user-follow">
        <div className="Intro-user-following">
          <div className="Intro-user-following-num">{countOfFollowing}個</div>追隨中
        </div>
        <div className="Intro-user-follower">
          <div className="Intro-user-follower-num">{countOfFollower}位</div>跟隨者
        </div>
      </div>
</div>
  )
}