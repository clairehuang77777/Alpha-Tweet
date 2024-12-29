import { Display } from "../components/display/Display";
import { LeftSection } from "../components/display/left/LeftSection"
import { RightSectionDisplay} from "../components/display/right/RightSectionDisplay"
import { RightSectionDisplayCenterMain } from "../components/display/right/center/RightSectionDisplayCenterMain.jsx";
import {RightSectionDisplayRight} from "../components/display/right/right/RightSectionDisplayRight/RightSectionDisplayRight.jsx"




export const MainPage = () => {
  return (
  <Display 
    left={<LeftSection/>}
    right={
    <RightSectionDisplay center={<RightSectionDisplayCenterMain />} right={<RightSectionDisplayRight/>}/>
    }
  />
  )
}