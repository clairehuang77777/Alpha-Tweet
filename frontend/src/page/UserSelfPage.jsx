import { Display } from "../components/display/Display";
import { LeftSection } from "../components/display/left/LeftSection"
import { RightSectionDisplay} from "../components/display/right/RightSectionDisplay"
import {RightSectionDisplayRight} from "../components/display/right/right/RightSectionDisplayRight/RightSectionDisplayRight.jsx"
import {RightSectionDisplayCenterUserSelf} from '../components/display/right/center/RightSectionDisplayCenterUserSelf.jsx'





export const UserSelfPage = () => {
  return (
  <Display 
    left={<LeftSection/>}
    right={
    <RightSectionDisplay center={<RightSectionDisplayCenterUserSelf />} right={<RightSectionDisplayRight/>}/>
    }
  />
  )
}