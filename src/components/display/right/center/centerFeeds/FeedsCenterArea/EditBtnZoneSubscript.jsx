import clsx from "clsx"

import { useState } from "react"

export const EditBtnZoneSubscript = () => {
  const [isFollowOthers, setIsFollowOthers] = useState(true)
  return (
    <>
    <img class="others-email-btn" src="/mail.png"></img>
    <img class="others-subscript-btn" src="/bell.png"></img>
    <button type="button" class={clsx("Intro-user-following-btn",{"click":isFollowOthers})}
    onClick={()=>{setIsFollowOthers(!isFollowOthers)}}>{isFollowOthers?"去追蹤":"正在跟隨"}</button>
    </>
  )
}