import { useContext, useEffect } from "react"
import { myIntroDataContext } from "../../../../../myIntroDataContext"
import { useParams } from "react-router-dom"
import { getSingleUserData } from "../../../../../api/alphatwitter"

export const CenterIntro = ({editBtnZone}) => {
const {myIntroData, setMyIntroData} = useContext(myIntroDataContext)
const {UserID} = useParams()
const {LikerUserID} = useParams()
const {ReplierID} = useParams()
const apiUseID = UserID || LikerUserID || ReplierID

const defaultMyIntro = {
  UserID: "U01",
  UserName: "claire",
  UserIDname: "@claire6644",
  CountUserFollowing: 9,
  CountUserFollower: 11,
  CountUserFeeds: 7,
  UserQuote: "Changing career...",
  CountUserLikesOthers: 34,
  CountUserReplyOthers: 25,
  photoSrc: "https://i.ibb.co/9b3xXJ6/3.jpg",
  photoBackgroundSrc: "https://i.ibb.co/0Fwc4Sf/l.png"
}


useEffect(()=>{
  let isMounted = true; 

  const fetchMyIntro= async() =>{
    try {
      const myIntroRes = await getSingleUserData(apiUseID)
      console.log(myIntroRes)
      if (isMounted && myIntroRes) {
          setMyIntroData(myIntroRes || {})
      }
    } 
    catch(error){
      console.error(error)
    }
  }
  fetchMyIntro()

  return()=> {
    isMounted = false ///防止組建卸載後更新
  }

},[setMyIntroData, apiUseID])

const disPlayMyInfo = Array.isArray(myIntroData) && myIntroData.length > 0 ? myIntroData[0] : [defaultMyIntro]

console.log(disPlayMyInfo.photoBackgroundSrc)
console.log(disPlayMyInfo.photoSrc)


  return (
    <div className="Intro">
      <div className="Intro-header-piczone">
        <img className="intro-header-pic" src={disPlayMyInfo.photoBackgroundSrc} alt="intro-header-photo"></img>
      </div>
      <div className="Intro-user-pic-zone">
        <img className="Intro-user-pic" src={disPlayMyInfo.photoSrc} alt="Intro-user-pic"></img>
      </div>
      <div className="Intro-user-edit-btn-zone">
        {editBtnZone}
      </div>
      <div className="Intro-usernameid">
        <div className="Intro-username">{disPlayMyInfo.username}</div>
        <div className="Intro-id">{disPlayMyInfo.UserIDname}</div>
      </div>
      <div className="Intro-user-introduction">
        <p>{disPlayMyInfo.UserQuote}</p>
      </div>
      <div className="Intro-user-follow">
        <div className="Intro-user-following">
          <div className="Intro-user-following-num">{disPlayMyInfo.CountUserFollowing}個</div>追隨中
        </div>
        <div className="Intro-user-follower">
          <div className="Intro-user-follower-num">{disPlayMyInfo.CountUserFollower}位</div>跟隨者
        </div>
      </div>
</div>
  )
}