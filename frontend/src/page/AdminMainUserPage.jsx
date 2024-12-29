import { Display } from "../components/display/Display"
import { LeftSectionAdmin } from "../components/display/left/LeftSectionAdmin"
import { RightSectionOnlyOneUserDisplay } from "../components/display/right/RightSectionOnlyOneUserDisplay"

export const AdminMainUserPage = () => {
  return (
    <Display 
    left={<LeftSectionAdmin/>}
    right={
    <RightSectionOnlyOneUserDisplay/>}/>
  )
}