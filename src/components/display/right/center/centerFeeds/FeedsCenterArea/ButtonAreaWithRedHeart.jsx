import { images } from "../../../../../../assets/images"

export const ButtonAreaWithRedHeart = () =>
{
  return (
    <>
          <div className="feeds-poster-ReplyArea">
            <img className="feeds-poster-ReplyIcon" src={images.comment}></img>
            <div className="feeds-poster-ReplyNumber">76</div>
          </div>
          <div className="feeds-poster-heartArea">
            <img className="feeds-poster-heartIcon" src={images.red-heart}></img>
            <div className="feeds-poster-heartNumber" style={{color:"red"}}>13</div>
          </div>
    </>
  )
}