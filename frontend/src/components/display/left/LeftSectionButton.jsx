import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { clsx } from "clsx"
import { jwtDecode } from "jwt-decode"
import { getUserIDFromUserName } from "../../../../../backend/api/alphatwitter"
import { userIDContext } from "../../../userIDContext"


export const LeftSectionButton = (props) => {
  const [isClick, setIsClick] = useState(false)
  const navigate = useNavigate()
  const {userID,setUserID} = useContext(userIDContext)

  //用useEffect封裝這個非同步函數, 不能夠寫在react元件上
  useEffect(()=> {
    const fetchUserID = async () => {
    try {
        //從local storage中取出userName
        const token = localStorage.getItem("token")
        const decoded_Token = jwtDecode(token)
        console.log(decoded_Token)
        //從decoded_Token中取出Account
        const selectedAccount = decoded_Token.Account

        const returnUserID = await getUserIDFromUserName(selectedAccount)
        console.log(returnUserID)
        //把UserID存到localstorage
        localStorage.setItem("UserID",returnUserID)
        setUserID(returnUserID)
        console.log(userID)
    }
    catch(error){
      console.error(error)
    }
  }
  fetchUserID()
  },[])
  


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
        navigate(`/user/${userID}`)
      }
      else if(props.id===7){
        localStorage.removeItem("token")
        navigate("/login")
      }
      }}>
      <img className="left-section-button-icon" src={isClick? props.srcClick : props.src}></img>
      <span className="left-section-button-text">{props.title}</span>      
    </div>
  )
} 