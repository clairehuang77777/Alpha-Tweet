import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { popUpContext } from "../../../../../../popUpContext"


export const EditBtnZoneEditUser = () => {
  const {editMode, setEditMode}= useContext(popUpContext)
  const navigate = useNavigate()

  function handleEditBtnClick(){
    setEditMode(true)
    navigate('/user/self/edit')
  }
  return (
    <button type="button" className="Intro-user-edit-btn"
    onClick={handleEditBtnClick}>編輯個人資料</button>
  )
}