import { RightSectionOnlyOneDisplay } from "../components/display/right/RightSectionOnlyOneDisplay"
import { Display } from "../components/display/Display"
import { LeftSectionAdmin } from "../components/display/left/LeftSectionAdmin"

export const AdminMainPage = () => {
  return (
  <Display 
    left={<LeftSectionAdmin/>}
    right={
    <RightSectionOnlyOneDisplay/>}/>
  )
}