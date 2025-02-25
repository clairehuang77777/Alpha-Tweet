import { images } from "../../../../../../assets/images"
import {useContext, useState, useEffect} from "react"

import { popUpContext } from "../../../../../../popUpContext"

export const DeletePostBtn = ({ item }) => {
  const{deletePopUp, setDeletePopUp} = useContext(popUpContext)
  const{deletePID, setDeletePID} = useContext(popUpContext)
  // console.log(deletePID)
 // 每個 DeletePostBtn 都有自己的 checked 狀態
  const [isChecked, setIsChecked] = useState(false);
  
  // 當 popup 關閉時，重置 checkbox 的狀態
  useEffect(() => {
      setIsChecked(false);
  }, [isChecked])

  // 當 PID 改變時，也重置 checkbox 狀態
  useEffect(() => {
    setIsChecked(false);
  }, [item.PID]);


  function handleCheckBoxClick(event){
    setIsChecked(event.target.checked)
  }

  return(
    <>
    <input type="checkbox" id={`delete-3dots-${item.PID}`} isChecked={isChecked} onChange={handleCheckBoxClick}></input>
      <label for={`delete-3dots-${item.PID}`}>
        <img className="delete-3" src={images.delete3}></img>
      </label>
      <div className={`delete-btn`} onClick={()=>{
        setDeletePopUp(true); 
        setDeletePID(item.PID)
      }}>
        <p className="delete-btntext">刪除貼文</p>
      </div>
    </>
  )
}