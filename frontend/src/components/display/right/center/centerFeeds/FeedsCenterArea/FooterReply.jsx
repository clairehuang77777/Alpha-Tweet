import { useState, useContext } from "react"
import { postUserReply } from "../../../../../../../../backend/api/alphatwitter"
import { useNavigate } from "react-router"
import { popUpContext } from "../../../../../../popUpContext"

export const FooterReply = () => {
  
  const { hasNewReply,setHasNewReply } = useContext(popUpContext)
  //先從Localstorage上拿資料
  const PID = localStorage.getItem("PID")
  const UserName = localStorage.getItem("UserName")
  const UserIDname = localStorage.getItem("UserIDname")
  const userPhotoSrc = localStorage.getItem("userPhotoSrc")
  // console.log(PID,UserName,UserIDname,userPhotoSrc)

  const [inputText, setInputText] = useState('')
  const commentText = inputText
  const navigate = useNavigate()

  async function handleSendClick(PID,UserName,UserIDname, userPhotoSrc,commentText){
    try{
      const res = await postUserReply(PID,UserName,UserIDname, userPhotoSrc,commentText)
      console.log(res)
      if (res.data ==="success"){
        setHasNewReply(true)
        setInputText('')
        navigate(`/user/comment/${PID}`)
      }
    }
    catch(error){
      console.error(error)
    }
  }

  return (
  <div className="footer-reply-area">
    <input type="text" id="footerReply" 
    value={inputText} onChange={(event)=>setInputText(event.target.value)}></input>
    <button type="submit" className="footerReply-submit-btn" onClick={()=>handleSendClick(PID,UserName,UserIDname, userPhotoSrc,commentText)}>Send</button>
  </div>
  )
}