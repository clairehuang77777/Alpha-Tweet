import clsx from "clsx"

import { useState } from "react"
import { images } from "../../../../../../assets/images"

export const EditBtnZoneSubscript = () => {
  const [isFollowOthers, setIsFollowOthers] = useState(true)
  return (
    <>
    <img className="others-email-btn" src={images.mail}></img>
    <img className="others-subscript-btn" src={images.bell}></img>
    <button type="button" className={clsx("Intro-user-following-btn",{"click":isFollowOthers})}
    onClick={()=>{setIsFollowOthers(!isFollowOthers)}}>{isFollowOthers?"去追蹤":"正在跟隨"}</button>
    </>
  )
}