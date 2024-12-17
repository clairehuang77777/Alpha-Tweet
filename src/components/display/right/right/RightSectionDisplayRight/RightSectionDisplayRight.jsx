import { RightSectionDisplayRightFollowBox } from './RightSectionDisplayRightFollowBox'
import { clsx } from "clsx"
import { useContext } from "react"
import { popUpContext } from "../../../popUpContext"

export const RightSectionDisplayRight = () => {
    const {popUp}= useContext(popUpContext)

  return(
    <div className="right-section">
      <div className={clsx("right-section-container",{"popup":popUp})}>
        <div className="right-section-container-title">Popular
        </div>
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
        <RightSectionDisplayRightFollowBox />
  </div>
</div>
  )
}