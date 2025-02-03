import { Display } from "../components/display/Display";
import { LeftSection } from "../components/display/left/LeftSection"
import { RightSectionDisplay} from "../components/display/right/RightSectionDisplay"
import { RightSectionDisplayCenterMain } from "../components/display/right/center/RightSectionDisplayCenterMain.jsx";
import {RightSectionDisplayRight} from "../components/display/right/right/RightSectionDisplayRight/RightSectionDisplayRight.jsx"
import { useNavigate } from "react-router";


export const MainPage = () => {
  //如果沒有token, 就轉導到login
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  if(!token){
    navigate("/login")
  }

  return (
  <Display 
    left={<LeftSection/>}
    right={
    <RightSectionDisplay center={<RightSectionDisplayCenterMain />} right={<RightSectionDisplayRight/>}/>
    }
  />
  )
}