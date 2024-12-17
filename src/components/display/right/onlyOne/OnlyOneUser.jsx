import { OnlyOneHeader } from "./header/OnlyOneHeader"
import { OnlyOneUserList } from "./userList/OnlyOneUserList"
import { OnlyOneUserSection } from "./userList/OnlyOneUserSection"

export const OnlyOneUser = () => {
  return (
    <>
    <OnlyOneHeader headername={"使用者列表"} />
    <OnlyOneUserSection>
      <OnlyOneUserList userCount={20}/>
    </OnlyOneUserSection>
    </>
  )
}