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
  
 
  // 提取 UserID（例如，路徑 "/user/:UserID"）
  const userId = location.pathname.split("/").pop(); // 提取路徑最後一部分作為 UserID

  // 動態判斷
  const EditBtnZoneProps =
    userId === "U01" ? <EditBtnZoneEditUser /> : <EditBtnZoneSubscript />;

  return (
    <>    
    <CenterWithLocation />
    <CenterIntro editBtnZone={EditBtnZoneProps} />
    <CenterTabBar/>
    <CenterFeedWithLocation/>
    </>
  )
}