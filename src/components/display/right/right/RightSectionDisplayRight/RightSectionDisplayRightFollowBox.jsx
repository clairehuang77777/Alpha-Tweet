import { useState, useEffect } from "react"
import { clsx } from "clsx"
import { images } from "../../../../../assets/images"
// import { useContext } from "react"
// import { userContext } from "../../../../../userContext"

export const RightSectionDisplayRightFollowBox = ({user, key}) => {
  const [followBoxCheck, setFollowBoxCheck] = useState(false)

  function handleFollowClick(){
    setFollowBoxCheck(!followBoxCheck)
  }
  
  return (
    <>
      <div key= {key} className="right-section-container-followbox">
        <div className="followbox-left">
          <img className="followbox-photo "src={user.photoSrc}alt="userphoto"></img>
        </div>
        <a href={`http://localhost:5173/Alpha-Tweet/user/${user.UserID}`}>
          <div className="followbox-center">
            <div className="followbox-center-name">{user.UserName}</div>
            <div className="followbox-center-id">{user.UserIDname}</div> 
          </div>
        </a> 
        <div className="followbox-right">
          <button type="button" 
          className={clsx('followbox-right-button', {followed: followBoxCheck})}
          onClick={()=>handleFollowClick()}>{followBoxCheck? "正在追蹤" : "追蹤"}</button>
        </div>
      </div>
    </>
  )
}