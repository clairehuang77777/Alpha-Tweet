import { CenterFeed } from "../centerFeeds/CenterFeed"
import { getUserFollowingFeeds } from "../../../../../../../backend/api/alphatwitter"
import { useEffect, useContext } from "react"
import { feedsIFollowContext } from "../../../../../feedsIFollowContext"
import { feedIsUpdateContext } from "../../../../../feedIsUpdateContext"

export const CenterFeedForMainFeed = ({ RightCenterReplyArea, RightCenterButtonArea }) => {
const {feedsIFollow, setFeedsIFollow} = useContext(feedsIFollowContext)
const {feedIsUpdate, setFeedIsUpdate} = useContext(feedIsUpdateContext)
  
  //設定預設值
  const defaultfeedsIFollow = {
    "UserID": "U01",
    "UserFollowingID": "U02",
    "UserFollowingIDname": "@RosienRose",
    "UserFollowingUserName": "Rose",
    "UserFollowingCountPostReply": 3,
    "UserFollowingCountPostLike": 3,
    "PostID": "P08",
    "PostContent": "Meet me at APT!",
    "PostTime": "2024-12-18T17:46:51.000Z"
  }

  useEffect(()=> {
  let isMounted = true;

  const fetchUserFollowingFeeds = async() => {
    try{
      const userFollowingFeeds = await getUserFollowingFeeds()
      console.log("資料類型:", Array.isArray(userFollowingFeeds)); // 確認是否為陣列
      console.log(userFollowingFeeds)
      setFeedsIFollow(userFollowingFeeds || [])
      setFeedIsUpdate(false)
    }
    catch(error){
      console.error(error)
    }
  }
  fetchUserFollowingFeeds()
  
  return()=> {
    isMounted = false ///防止組建卸載後更新
  }
  },[setFeedsIFollow, feedIsUpdate])
  

const displayFeedsIFollow = Array.isArray(feedsIFollow) && feedsIFollow.length > 0 
    ? feedsIFollow 
    : [defaultfeedsIFollow];

  return (
    <>
    {displayFeedsIFollow.map((item,index)=>(
         <CenterFeed 
         key={index}
         item={item}
         RightCenterReplyArea={RightCenterReplyArea} 
        RightCenterButtonArea={RightCenterButtonArea}/>     
    ))}
    </>
  )
}