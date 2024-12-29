import { images } from "../../../../../../assets/images"

export const ButtonArea = () =>
{
  return (
    <>
          <div className="feeds-poster-ReplyArea">
            <img className="feeds-poster-ReplyIcon" src={images.comment}></img>
            <div className="feeds-poster-ReplyNumber">76</div>
          </div>
          <div className="feeds-poster-heartArea">
            <img className="feeds-poster-heartIcon" src={images.heart}></img>
            <div className="feeds-poster-heartNumber" >13</div>
          </div>
    </>
  )
}