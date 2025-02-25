import { Display } from "../components/display/Display.jsx";
import { LeftSection } from "../components/display/left/LeftSection.jsx"
import { RightSectionDisplay} from "../components/display/right/RightSectionDisplay.jsx"
import {RightSectionDisplayRight} from "../components/display/right/right/RightSectionDisplayRight/RightSectionDisplayRight.jsx"
import {RightSectionDisplayCenterComment} from "../components/display/right/center/RightSectionDisplayCenterComment.jsx"




export const CommentPage = () => {

  return (
    <>
    <Display 
    left={<LeftSection/>}
    right={
    <RightSectionDisplay center={<RightSectionDisplayCenterComment />} right={<RightSectionDisplayRight/>}/>
    }
  />
  </>
  )
}