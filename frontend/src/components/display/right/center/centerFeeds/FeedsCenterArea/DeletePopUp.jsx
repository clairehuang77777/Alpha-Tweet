import { useContext, useEffect} from "react"
import { popUpContext } from "../../../../../../popUpContext"
import { deleteSingleFeed } from "../../../../../../../../backend/api/alphatwitter"
import { useNavigate } from "react-router"

export const DeletePopUp = () => {
   const{deletePID, setDeletePID} = useContext(popUpContext)
   const{deletePopUp,setDeletePopUp} = useContext(popUpContext)
  console.log(deletePID)
  const navigate = useNavigate()

  async function handleDeletePost(deletePID){
    try {  
    const res = await deleteSingleFeed(deletePID)
    console.log(res)
    //收到成功訊息, 清空deletePID
    setDeletePID(null)
    //關閉popup
    setDeletePopUp(false)
    //跳轉回userSelfPage
    navigate("/user/U01")
    }catch(error){
      console.error(error)
    }
  }

    // 當 deletePopUp 狀態改變時，控制 body 的 overflow
  useEffect(() => {
    if (deletePopUp) {
      // 開啟 popup 時，禁止滾動
      document.body.style.overflow = "hidden";
    } else {
      // 關閉 popup 後，恢復滾動
      document.body.style.overflow = "auto";
    }

    // 在組件卸載時，確保恢復滾動
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [deletePopUp]);


   return (
    <>
    <div className="cover-image-delete">
      <div className="pop-up-message-delete">
        <form>
          <h2 className="confirm-delete-text-1">確定刪除貼文?</h2>
              <h4 className="confirm-delete-text-2">這則貼文將從你的個人首頁、任何關注你的粉絲的首頁及搜尋結果中移除。</h4>
                <button type="submit" className="agreeDeleteBtn" onClick={(event)=>{
                  event.preventDefault();
                  handleDeletePost(deletePID)}}>刪除</button><br></br>
                <button type="submit" className="notAgreeDeleteBtn" onClick={(event)=>{
                  event.preventDefault()
                  setDeletePopUp(false)
                  setDeletePID(null)
                  }}>取消</button>
        </form>
      </div>
    </div>
    </>
   )
}