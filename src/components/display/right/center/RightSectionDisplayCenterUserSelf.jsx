import { CenterWithLocation } from "./centerHeader/CenterHeaderWithLocation"
import { CenterFeedWithLocation } from "./centerFeeds/CenterFeedWithLocation"
import { CenterIntro } from './centerPost/CenterIntro'
import { CenterTabBar } from "./centerTabBar/centerTabBar"
import { EditBtnZoneEditUser } from "./centerFeeds/FeedsCenterArea/EditBtnZoneEditUser"
import { EditBtnZoneSubscript } from "./centerFeeds/FeedsCenterArea/EditBtnZoneSubscript"
import { useLocation } from "react-router-dom"


export const RightSectionDisplayCenterUserSelf = () => {
  const location = useLocation()

  let EditBtnZoneProps = null
  let usernameProps = ''
  let useridProps = ''
  let userquoteProps = ''
  let countOfFollowingProps= null
  let countOfFollowerProps = null
  let coverphotoProps = document.querySelector('Intro-user-pic')?.src || '/user.png'
  let headerphotoProps = document.querySelector('intro-header-pic')?.src || '/header.png'



  if (location.pathname === "/user/other" ||
    location.pathname === "/user/other/noti"){
      EditBtnZoneProps = <EditBtnZoneSubscript/>
      usernameProps="Jenny"
      useridProps="@JennyrubyJen"
      userquoteProps='Pretty Girls dont do drama'
      coverphotoProps = '/user2.png'
      countOfFollowingProps= 1093
      countOfFollowerProps =8937
      headerphotoProps='/header2.png'

    }

  else if (location.pathname === '/user/self'||
    location.pathname === '/user/self/reply' ||
    location.pathname === '/user/self/likes'
  ){
    EditBtnZoneProps=<EditBtnZoneEditUser/>
    usernameProps="Rosie"
    useridProps="@RosienRose"
    userquoteProps='Meet me at APT!'
    coverphotoProps = '/user.png'
    countOfFollowingProps= 1047
    countOfFollowerProps = 8459
    headerphotoProps='/header.png'
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