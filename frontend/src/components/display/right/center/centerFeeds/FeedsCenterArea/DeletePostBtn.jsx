import { images } from "../../../../../../assets/images"

export const DeletePostBtn = ({ item }) => {
  return(
    <>
    <input type="checkbox" id={`delete-3dots-${item.PostID}`}></input>
      <label for={`delete-3dots-${item.PostID}`}>
        <img className="delete-3" src={images.delete3}></img>
      </label>
      <div className="delete-btn">
        <p className="delete-btn-text">刪除貼文</p>
      </div>
    </>
  )
}