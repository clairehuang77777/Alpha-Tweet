import { CenterFeed } from "../centerFeeds/CenterFeed"
import { getUserFollowingFeeds } from "../../../../../../../backend/api/alphatwitter"
import { useEffect, useContext, useState } from "react"
import { feedsIFollowContext } from "../../../../../feedsIFollowContext"
import { feedIsUpdateContext } from "../../../../../feedIsUpdateContext"
import { FeedSkelton } from "../centerFeeds/FeedSkelton"
import "react-loading-skeleton"
import { ButtonArea } from "../centerFeeds/FeedsCenterArea/ButtonArea"
import { popUpContext } from "../../../../../popUpContext"

export const CenterFeedForMainFeed = ({ RightCenterReplyArea, RightCenterButtonArea }) => {
const {feedsIFollow, setFeedsIFollow} = useContext(feedsIFollowContext)
const {feedIsUpdate, setFeedIsUpdate} = useContext(feedIsUpdateContext)
//使用reactloading
const [isLoading, setIsLoading]=useState(true)
const{heartAUDY, setHeartAUDY} = useContext(popUpContext)


  useEffect(()=> {
  let isMounted = true;

  const fetchUserFollowingFeeds = async() => {
    try{
      const userFollowingFeeds = await getUserFollowingFeeds()
      console.log("資料類型:", Array.isArray(userFollowingFeeds)); // 確認是否為陣列
      console.log(userFollowingFeeds)
      if (isMounted) {
        setFeedsIFollow(userFollowingFeeds || [])
        setIsLoading(false)
        setHeartAUD(false)
      }
      setFeedIsUpdate(false)

    }
    catch(error){
      console.error(error)
      setIsLoading(false)  // 如果出現錯誤，也要設為 false
    }
  }
  fetchUserFollowingFeeds()
  
  return()=> {
    isMounted = false ///防止組建卸載後更新
  }
  },[setFeedsIFollow, feedIsUpdate, heartAUDY])
  

// const displayFeedsIFollow = Array.isArray(feedsIFollow) && feedsIFollow.length > 0 
//     ? feedsIFollow 
//     : [defaultfeedsIFollow];

  return (
    <>
  {isLoading ? (
      <FeedSkelton count={10}/>
    ) : (
      feedsIFollow.map((item,index)=>(
         <CenterFeed 
         key={index}
         item={item}
         RightCenterReplyArea={RightCenterReplyArea} 
        RightCenterButtonArea={<ButtonArea item={item}/>}/>     
      ))
    )}
    </>
  )
}