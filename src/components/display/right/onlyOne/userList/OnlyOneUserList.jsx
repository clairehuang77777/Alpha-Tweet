export const OnlyOneUserList = ({userCount}) => {
return (
  <>
  {Array(userCount).fill(null).map((_,index)=>(
    <div key={index} className="Small-intro">
      <div className="Small-intro-header-piczone">
        <img className="Small-intro-header-pic" src="./header.png" alt="Small-intro-header-photo"></img>
      </div>
      <div className="Small-intro-user-pic-zone">
        <img className="Small-intro-user-pic" src="./user.png" alt="Small-intro-user-pic"></img>
      </div>
      <div className="Small-intro-greyzone">
        <div className="Small-intro-usernameid">
          <div className  ="Small-intro-username">Rosie</div>
          <div className="Small-intro-id">@RosienRose</div>
        </div>
        <div className="Small-intro-replyandlike">
          <div className="Small-intro-reply">
            <div className="Small-intro-replyicon">
              <img className="Small-intro-replyicon-content"src="/comment.png" alt="replybtn"></img>
            </div>
            <div className="Small-intro-reply-num">1.5k</div>
          </div>
          <div className="Small-intro-like">
            <div className="Small-intro-likeicon">
              <img className="Small-intro-likeicon-content"src="/heart.png" alt="likebtn"></img>
            </div>
            <div className="Small-intro-like-num">20K</div>
          </div>
        </div>
        <div className="Small-intro-user-follow">
          <div className="Small-intro-user-following">
            <div className="Small-intro-user-following-num">34個</div>追隨中
          </div>
          <div className="Small-intro-user-follower">
            <div className="Small-intro-user-follower-num">59位</div>跟隨者
          </div>
        </div>
      </div>
    </div>
  ))}
  </>
)}