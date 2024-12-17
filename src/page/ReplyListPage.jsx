import { Display } from "../components/display/Display";
import { LeftSection } from "../components/display/left/LeftSection"
import { RightSectionDisplay} from "../components/display/right/RightSectionDisplay"
import {RightSectionDisplayRight} from "../components/display/right/right/RightSectionDisplayRight/RightSectionDisplayRight.jsx"
import {RightSectionDisplayCenterReplyList} from "../components/display/right/center/RightSectionDisplayCenterReplyList.jsx"




export const ReplyListPage = () => {
  return (
  <Display 
    left={<LeftSection/>}
    right={
    <RightSectionDisplay center={<RightSectionDisplayCenterReplyList />} right={<RightSectionDisplayRight/>}/>
    }
  />
  )
}