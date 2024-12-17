import { useState } from "react"
import { clsx } from "clsx"


export const RightSectionDisplayRightFollowBox = () => {
  const [followBoxCheck, setFollowBoxCheck] = useState(false)

  function handleFollowClick(){
    setFollowBoxCheck(!followBoxCheck)
  }

  return (
    <div className="right-section-container-followbox">
      <div className="followbox-left">
        <img className="followbox-photo "src="/user.png" alt="userphoto"></img>
      </div>
      <div className="followbox-center">
        <div className="followbox-center-name">Pizza Hut</div>
        <div className="followbox-center-id">@pizzahut</div>        
      </div>
      <div className="followbox-right">
        <button type="button" 
        className={clsx('followbox-right-button', {followed: followBoxCheck})}
        onClick={()=>handleFollowClick()}>{followBoxCheck? "正在追蹤" : "追蹤"}</button>
      </div>
  </div>
  )
}