import { Display } from "../components/display/Display";
import { LeftSection } from "../components/display/left/LeftSection"
import { RightSectionDisplay} from "../components/display/right/RightSectionDisplay"
import {RightSectionDisplayRight} from "../components/display/right/right/RightSectionDisplayRight/RightSectionDisplayRight.jsx"
import {RightSectionDisplayCenterUserSelf} from '../components/display/right/center/RightSectionDisplayCenterUserSelf.jsx'
import { useContext,useEffect,useRef } from "react"
import { popUpContext } from "../popUpContext.js"
import { DeletePopUp } from "../components/display/right/center/centerFeeds/FeedsCenterArea/DeletePopUp.jsx"




export const UserSelfPage = () => {
  const {deletePopUp, setDeletePopUp} = useContext(popUpContext)
  const hasReloaded = useRef(false);

  return (
    <>
    {deletePopUp && <DeletePopUp />}
    <Display 
    left={<LeftSection/>}
    right={
    <RightSectionDisplay center={<RightSectionDisplayCenterUserSelf />} right={<RightSectionDisplayRight/>}/>
    }
  />
  </>
  )
}