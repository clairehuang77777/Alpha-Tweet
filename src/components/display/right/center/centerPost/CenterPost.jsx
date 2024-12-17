import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { popUpContext } from "../../../popUpContext"
import { clsx } from "clsx"

export const CenterPost = () => {
  const {popup, setPopUp}= useContext(popUpContext)
  const navigate = useNavigate()

  function handleTweetBtn(){
    setPopUp(true)
    navigate('/main/tweet')
  }
  return (
    <>
    <div className="post">
      <div className="post-LeftArea">
        <img className="post-user-photo" src="/user.png" alt="feeds-photo"></img>
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