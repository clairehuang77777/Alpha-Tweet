
export const ButtonAreaWithRedHeart = () =>
{
  return (
    <>
          <div className="feeds-poster-ReplyArea">
            <img className="feeds-poster-ReplyIcon" src="/comment.png"></img>
            <div className="feeds-poster-ReplyNumber">76</div>
          </div>
          <div className="feeds-poster-heartArea">
            <img className="feeds-poster-heartIcon" src="/red-heart.png"></img>
            <div className="feeds-poster-heartNumber" style={{color:"red"}}>13</div>
          </div>
    </>
  )
}