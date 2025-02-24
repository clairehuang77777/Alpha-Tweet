import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { popUpContext } from "../../../../popUpContext"
import { images } from "../../../../assets/images"


export const PopUpEditMode = () => {
  const {setEditMode}= useContext(popUpContext)
  const navigate = useNavigate()
  
  function handleClickBtn(){
    setEditMode(false)
    navigate('/user/self')
    console.log("btn click")
  }

  return (
  <>
  <div className="Editmode-border">
  <div className="Editmode">
    <div className="Editmode-header">
      <div className="Editmode-top-area">
        <img src={images.close} alt="closebtn" className="Editmode-top-area-close-btn" onClick={handleClickBtn}></img>
      </div>
      <div className="Editmode-top-area-text">編輯個人資料</div>
      <button className="save-btn" type="button">儲存</button>
    </div>
    <div className="Editmode-header-piczone">
      <img className="Editmode-header-pic" src={images.header} alt="Editmode-header-photo"></img>
    </div>
    <div className="Editmode-user-piczone">
      <img className="Editmode-user-pic" src={images.user} alt="Editmode-user-pic"></img>
    </div>
    <div className="Editmode-edit-textarea">
      <div className="inputBoxConatiner">
        <div className="inputbox-username">
          <label htmlFor="username">名稱</label><br/>
          <input type="text" name="username" id="Editmode-username"></input>
          <div className="text-count">0/50</div>
        </div>
      </div>
      <br/>
      <div className="inputBoxConatiner">
        <div className="inputbox-intro">
          <label htmlFor="intro">自我介紹</label><br/>
          <textarea type="text" name="intro" id="Editmode-intro"></textarea>
          <div className="text-count">0/160</div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}