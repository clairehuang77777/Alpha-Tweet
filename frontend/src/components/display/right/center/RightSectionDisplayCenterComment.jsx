import { CenterWithLocation } from "./centerHeader/CenterHeaderWithLocation"
import { CenterFeedWithLocation } from "./centerFeeds/CenterFeedWithLocation"
import { useLocation } from "react-router-dom"
import { images } from "../../../../assets/images" 
import { CenterFeed } from "./centerFeeds/CenterFeed"
import { popUpContext } from "../../../../popUpContext"
import { useContext } from "react"
import { FooterReply } from "./centerFeeds/FeedsCenterArea/FooterReply"

export const RightSectionDisplayCenterComment = () => {
  const location = useLocation()
  const item = location.state?.item

  const {theCommentPost, setTheCommentPost} = useContext(popUpContext)
  

  return (
    <>    
    <CenterWithLocation />
    <CenterFeed item={theCommentPost} RightCenterReplyArea={null} RightCenterButtonArea={null} DeleteIconArea={null}/>
    <div className="post-brbar">-</div>
    <CenterFeedWithLocation/>
    <FooterReply/>
    </>
  )
}