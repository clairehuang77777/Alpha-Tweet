import { images } from "../../../../../assets/images"
import { getAllFeeds } from "../../../../../api/alphatwitter"
import { useContext, useEffect } from "react"
import { feedsContext } from "../../../../../feedsContext"
export const OnlyOneTweet=()=>{
  const {feeds, setFeeds} = useContext(feedsContext)

  //預設資料
  const defaultfeeds = [
    {
      "PostID": "P01",
      "PostContent": "懶骨頭！懶骨頭！",
      "PostTime": "2024-12-19T11:42:52.000Z",
      "UserID": "U01",
      "UserIDname": "@claire6644",
      "UserName": "claire",
      "CountPostReply": 3,
      "CountPostLike": 7
    }
  ];

useEffect(() => {
let isMounted = true; 

const fetchFeedsData = async() => {
  try {
    const allfeedsdata = await getAllFeeds()
    console.log(allfeedsdata)
    setFeeds(allfeedsdata)
  }
  catch(error){
    console.error(error)
  }
}

fetchFeedsData()

return() => {
  isMounted = false ///防止組建卸載後更新
}

},[setFeeds])

//使用條件渲染
const feedDisplayData = feeds.length > 0 ? feeds : defaultfeeds

  return (
    feedDisplayData.map((feed,index)=>(
    <>
      <div key={index} className="adminMain">
        <div className="adminMain-LeftArea">
          <img src={feed.photoSrc} className="adminMain-user-photo"></img>
        </div>
        <div className="adminMain-RightArea">
          <div className="adminMain-RightTopArea">
            <div className="adminMain-poster-name">{feed.UserName}</div>
            <div className="adminMain-poster-id">{feed.UserIDname}</div>
            <div className="adminMain-poster-time">∙ {feed.PostTime}</div>
          </div>
        <div className="adminMain-RightCenterArea">
          <div className="adminMain-poster-content">{feed.PostContent}</div>
        </div>
      </div>
    </div>
</>
  )))
}