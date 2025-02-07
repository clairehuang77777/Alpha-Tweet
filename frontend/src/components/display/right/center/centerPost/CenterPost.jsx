import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { popUpContext } from "../../../popUpContext"
import { clsx } from "clsx"
import { images } from "../../../../../assets/images"
import { getSingleUserData, postUserFollowingFeeds } from "../../../../../../../backend/api/alphatwitter"
import { feedIsUpdateContext } from "../../../../../feedIsUpdateContext"

export const CenterPost = () => {
  const {popup, setPopUp}= useContext(popUpContext)
  const navigate = useNavigate()
  const [photoSrc, setPhotoSrc] = useState("")
  const [newPost, setNewPost] = useState("")
  const {feedIsUpdate, setFeedIsUpdate} = useContext(feedIsUpdateContext)
  const [isFocused, setIsFocused] = useState(false); // 追蹤是否點擊 textarea

  async function handleTweetBtn(){
    // setPopUp(true)
    // navigate('/main/tweet')
    console.log(newPost)
    //印出目前時間函式
    const formatDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // 月份是從 0 開始的
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };


    //從local storage 拿
    const UserID = localStorage.getItem("UserID")
    const UserIDname = localStorage.getItem("UserIDname")
    const UserName = localStorage.getItem("UserName")
    const photoSrc = localStorage.getItem("userPhotoSrc")
    const currentTime = formatDate()

    const res = await postUserFollowingFeeds(UserID,UserIDname, UserName, newPost ,currentTime,photoSrc)
    console.log(res)
    //如果傳回來是sucess, 代表feed已經更新
    if (res.data === "success"){
      setFeedIsUpdate(true)
      setNewPost("") //清空textarea
      console.log("feedIsUpdate更新!")
    } else {
      setFeedIsUpdate(false)
    }
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
        <textarea className="post-RightTopArea" onChange={(event)=>setNewPost(event.target.value)} value={newPost} placeholder={isFocused? "": "有什麼新鮮事?"} onFocus={() => setIsFocused(true)}>
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