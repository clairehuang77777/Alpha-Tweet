import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { popUpContext } from "../../../popUpContext"
import { clsx } from "clsx"
import { images } from "../../../../../assets/images"
import { getSingleUserData } from "../../../../../../../backend/api/alphatwitter"

export const CenterPost = () => {
  const {popup, setPopUp}= useContext(popUpContext)
  const navigate = useNavigate()
  const [photoSrc, setPhotoSrc] = useState("")

  function handleTweetBtn(){
    setPopUp(true)
    navigate('/main/tweet')
  }

  useEffect(()=>{
  const fetchUserPhoto = async () => {
    try {
      //從local storage拿到UserID
      const getUserID = localStorage.getItem("UserID")

      const fetchUserdata = await getSingleUserData(getUserID)
    
      console.log(fetchUserdata[0].photoSrc)
      const userPhotoSrc = fetchUserdata[0].photoSrc

      localStorage.setItem("userPhotoSrc", userPhotoSrc)
      setPhotoSrc(userPhotoSrc)
    }
    catch(error){
      console.error(error)
    }
  }
  fetchUserPhoto()
},[])

  return (
    <>
    <div className="post">
      <div className="post-LeftArea">
        <img className="post-user-photo" src={photoSrc} alt="feeds-photo"></img>
      </div>
      <div className={clsx("post-RightArea",{"popup":popup})}>
        <textarea className="post-RightTopArea">
          有什麼新鮮事?
        </textarea>
        <div className="post-RightButtonArea">
          <button type="button" className="post-button"
          onClick={handleTweetBtn}>推文</button>
        </div>
      </div>
    </div>
    <div className="post-brbar">-</div>
    </>
  )
}