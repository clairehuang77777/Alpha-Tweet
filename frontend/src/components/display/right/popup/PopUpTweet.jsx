import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { popUpContext } from "../../../../popUpContext"
import { images } from "../../../../assets/images"

export const PopUpTweet = () => {
  const {popup, setPopUp}= useContext(popUpContext)
  const navigate = useNavigate()

  function handleCloseBtn(){
    setPopUp(false)
    navigate('/main/tweet')
  }

  return (
    <div className="popup-tweet">
  <div className="popup-tweet-top-area"
    onClick={handleCloseBtn}>
    <img src={images.close} alt="closebtn" className="popup-tweet-top-area-close-btn"></img>
  </div>
  <div className="popup-tweet-center-area">
    <div className="popup-twee-LeftArea">
      <img className="popup-tweet-user-photo" src={images.user} alt="popup-tweet-photo"></img>
    </div>
    <div className="popup-tweet-RightArea">
      <textarea className="popup-tweet-RightTopArea" value="有什麼新鮮事?"></textarea>
      <div className="popup-tweet-RightButtonArea">
        <button type="button" className="tweet-button">推文</button>
      </div>
    </div>
  </div>
</div>
  )
}