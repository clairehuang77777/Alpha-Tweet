import { RightSectionDisplayRightFollowBox } from './RightSectionDisplayRightFollowBox'
import { clsx } from "clsx"
import { useContext,useState,useEffect } from "react"
import { popUpContext } from "../../../popUpContext"
import { getAllUserData } from '../../../../../../../backend/api/alphatwitter'

export const RightSectionDisplayRight = () => {
  const {popUp}= useContext(popUpContext)
  const [showUserData, setShowUserData] = useState([]); // 定义用于保存用户数据的状态
  
  //設定預設值
  const dafaultUsers = {
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

  useEffect(()=>{
  let isMounted = true; 
  const fetchUserData = async() => {
    try {
    const showUserData = await getAllUserData()
    if (isMounted) {
        setShowUserData(showUserData); // 将获取的数据保存到状态
        }
    console.log(showUserData)
    }
    catch(error){
      console.error(error)
    }
  }

  fetchUserData()
  
  return()=> {
    isMounted = false ///防止組建卸載後更新
  }

},[])
  

  const displayPopularUsers = Array.isArray(showUserData) && showUserData.length > 0 ? showUserData : [dafaultUsers]

  return(
    <div className="right-section">
      <div className={clsx("right-section-container",{"popup":popUp})}>
        <div className="right-section-container-title">Popular</div>
        {displayPopularUsers.map((user,index)=>(
          <RightSectionDisplayRightFollowBox user={user} key={user.UserID || index} />))}
  </div>
</div>
  )
}