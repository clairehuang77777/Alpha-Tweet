import { useLocation } from "react-router-dom"
import { CenterFeed } from "./CenterFeed"
import { ButtonArea } from "./FeedsCenterArea/ButtonArea"
import { ReplyArea } from "./FeedsCenterArea/ReplyArea"
import {ButtonAreaWithRedHeart} from "./FeedsCenterArea/ButtonAreaWithRedHeart"
import { images } from "../../../../../assets/images"

export const CenterFeedWithLocation = ({feedCount}) => {

  let location = useLocation()

  //初始化變數
  let RightCenterReplyContent=null 
  let RightCenterButtonContent=null
  let usernameContent = ''
  let useridContent = ''
  let coverphotoContent = document.querySelector('feeds-user-photo')?.src || {images.user}
  let postcontentContent =''

  if (location.pathname === '/' ||
      location.pathname === '/main/tweet' ||
      location.pathname === '/main/replymodal' ||
      location.pathname === '/user/self' ||
      location.pathname === '/user/self/edit'
  ){
    RightCenterReplyContent=null
    RightCenterButtonContent=<ButtonArea/>
    usernameContent = 'Rosie'
    useridContent = '@RosienRose'
    coverphotoContent= '/user.png'
    postcontentContent ='Sleep tmr but tonight go CRAZY!!'
  }

  else if(location.pathname === '/user/self/likes'){
    RightCenterReplyContent=null
    RightCenterButtonContent=<ButtonAreaWithRedHeart/>
    usernameContent = 'Rosie'
    useridContent = '@RosienRose'
    coverphotoContent= '/user.png'
    postcontentContent ='Sleep tmr but tonight go CRAZY!!'
  }
  
  else if (location.pathname === '/replylist' ||
    location.pathname === '/user/self/reply'
  ){
    RightCenterReplyContent=<ReplyArea/>
    RightCenterButtonContent=null
    usernameContent = 'Rosie'
    useridContent = '@RosienRose'
    coverphotoContent= '/user.png'
    postcontentContent ='Sleep tmr but tonight go CRAZY!!'
  }

  else if (location.pathname === '/user/other' ||
    location.pathname === '/user/other/noti'
  ){
    RightCenterReplyContent=null
    RightCenterButtonContent=<ButtonAreaWithRedHeart/>
    usernameContent = 'Jennie'
    useridContent = '@JennyrubyJen'
    coverphotoContent= '/user2.png'
    postcontentContent ='Just Land down in LA. '
  }

  return (
    Array(feedCount).fill(null).map((_,index)=>(
         <CenterFeed key={index} RightCenterReplyArea={RightCenterReplyContent} RightCenterButtonArea={RightCenterButtonContent}
         username={usernameContent}
         userid={useridContent}
         coverphoto={coverphotoContent}
         postcontent={postcontentContent} />
        )
      )
    )
}