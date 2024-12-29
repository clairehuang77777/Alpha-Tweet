import { images } from "../../../../../assets/images"
import { getAllUserData } from "../../../../../../../backend/api/alphatwitter"
import { useContext, useEffect } from "react"
import { userContext } from "../../../../../userContext"

export const OnlyOneUserList = () => {
  const {users, setUsers} = useContext(userContext)

  //預設資料
  const defaultUsers = [
    {
      "UserID": "U01",
      "UserName": "claire",
      "UserIDname": "@claire6644",
      "CountUserFollowing": 9,
      "CountUserFollower": 11,
      "CountUserFeeds": 7,
      "UserQuote": "Changing career...",
      "CountUserLikesOthers": 34,
      "CountUserReplyOthers": 25
    }
  ];

useEffect(()=> {
  let isMounted = true; // 防止組件卸載後更新

  const fetchData = async ()=>{
    try {
      const alluserdata = await getAllUserData()
      setUsers(alluserdata || []) // 確保資料存在
      }
    catch(error){
      console.error(error)
    }
  }
    fetchData();

    return() => {
      isMounted = false //防止組建卸載後更新
    }
  },[setUsers]
)
  
//使用條件渲染
const displayUser = users.length>0? users : defaultUsers;

return (
  <>
  {displayUser.map((user,index)=>(
    <div key={index} className="Small-intro">
      <div className="Small-intro-header-piczone">
        <img className="Small-intro-header-pic" src={user.photoBackgroundSrc} alt="Small-intro-header-photo"></img>
      </div>
      <div className="Small-intro-user-pic-zone">
        <img className="Small-intro-user-pic" src={user.photoSrc} alt="Small-intro-user-pic"></img>
      </div>
      <div className="Small-intro-greyzone">
        <div className="Small-intro-usernameid">
          <div className  ="Small-intro-username">{user.UserName}</div>
          <div className="Small-intro-id">{user.UserIDname}</div>
        </div>
        <div className="Small-intro-replyandlike">
          <div className="Small-intro-reply">
            <div className="Small-intro-replyicon">
              <img className="Small-intro-replyicon-content"src={images.comment} alt="replybtn"></img>
            </div>
            <div className="Small-intro-reply-num">{user.CountUserReplyOthers}</div>
          </div>
          <div className="Small-intro-like">
            <div className="Small-intro-likeicon">
              <img className="Small-intro-likeicon-content"src={images.heart} alt="likebtn"></img>
            </div>
            <div className="Small-intro-like-num">{user.CountUserLikesOthers}</div>
          </div>
        </div>
        <div className="Small-intro-user-follow">
          <div className="Small-intro-user-following">
            <div className="Small-intro-user-following-num">{user.CountUserFollowing}個</div>追隨中
          </div>
          <div className="Small-intro-user-follower">
            <div className="Small-intro-user-follower-num">{user.CountUserFollower}位</div>跟隨者
          </div>
        </div>
      </div>
    </div>
  ))}
  </>
)}