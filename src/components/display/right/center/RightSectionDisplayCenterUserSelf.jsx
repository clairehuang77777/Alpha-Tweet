import { CenterWithLocation } from "./centerHeader/CenterHeaderWithLocation"
import { CenterFeedWithLocation } from "./centerFeeds/CenterFeedWithLocation"
import { CenterIntro } from './centerPost/CenterIntro'
import { CenterTabBar } from "./centerTabBar/centerTabBar"
import { EditBtnZoneEditUser } from "./centerFeeds/FeedsCenterArea/EditBtnZoneEditUser"
import { EditBtnZoneSubscript } from "./centerFeeds/FeedsCenterArea/EditBtnZoneSubscript"
import { useLocation } from "react-router-dom"
import { images } from "../../../../assets/images" 

export const RightSectionDisplayCenterUserSelf = () => {
  const location = useLocation()

  let EditBtnZoneProps = null
  let usernameProps = ''
  let useridProps = ''
  let userquoteProps = ''
  let countOfFollowingProps= null
  let countOfFollowerProps = null
  let coverphotoProps = document.querySelector('Intro-user-pic')?.src || images.user
  let headerphotoProps = document.querySelector('intro-header-pic')?.src || images.header



  if (location.pathname === "/user/other" ||
    location.pathname === "/user/other/noti"){
      EditBtnZoneProps = <EditBtnZoneSubscript/>
      usernameProps="Jenny"
      useridProps="@JennyrubyJen"
      userquoteProps='Pretty Girls dont do drama'
      coverphotoProps = {images.user2}
      countOfFollowingProps= 1093
      countOfFollowerProps =8937
      headerphotoProps={images.header2}

    }

  else if (location.pathname === '/user/self'||
    location.pathname === '/user/self/reply' ||
    location.pathname === '/user/self/likes'
  ){
    EditBtnZoneProps=<EditBtnZoneEditUser/>
    usernameProps="Rosie"
    useridProps="@RosienRose"
    userquoteProps='Meet me at APT!'
    coverphotoProps = {images.user}
    countOfFollowingProps= 1047
    countOfFollowerProps = 8459
    headerphotoProps={images.header}
  }
  return (
    <>
    <CenterWithLocation />
    <CenterIntro editBtnZone={EditBtnZoneProps} 
    username={usernameProps} 
    userid={useridProps} 
    userquote={userquoteProps}
    coverphoto={coverphotoProps}
    countOfFollowing={countOfFollowingProps}
    countOfFollower={countOfFollowerProps}
    headerPhoto={headerphotoProps}/>
    <CenterTabBar/>
    <CenterFeedWithLocation feedCount={10}/>
    </>
  )
}