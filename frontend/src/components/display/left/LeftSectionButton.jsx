import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { clsx } from "clsx"

export const LeftSectionButton = (props) => {
  const [isClick, setIsClick] = useState(false)
  const navigate = useNavigate()

  return (
    <div className={clsx(
      "left-section-button",{click:isClick})}
      onMouseEnter={()=>{setIsClick(true)}}
      onMouseLeave={()=>{setIsClick(false)}}
      onClick={()=>{
        if(props.id===1){
        navigate("/admin_main")
      } 
      else if(props.id===2){
        navigate("/admin_user")
      }
      else if(props.id===3){
        navigate("/BackendLogin")
      }
      else if(props.id===4){
        navigate("/")
      }
      else if(props.id===5){
        navigate("/user/U01")
      }
      else if(props.id===7){
        navigate("/login")
      }
      }}>
      <img className="left-section-button-icon" src={isClick? props.srcClick : props.src}></img>
      <span className="left-section-button-text">{props.title}</span>      
    </div>
  )
} 