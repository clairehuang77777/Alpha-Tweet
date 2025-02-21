import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export const FeedSkelton = ({count}) => {
  return(
    <>
    {Array.from({ length: count }).map((_, index) => (
    <div className="card-skelton">
      <div className="feeds-LeftArea-skelton">
        <Skeleton circle width={40} height={40}/>
      </div>
      <div className="feeds-RightArea">
        <div className="feeds-RightTopArea-skelton">
            <Skeleton width={250} height={15}/>
        </div>
        <div className="feeds-RightCenterReplyArea-skelton">
            <Skeleton width={450} height={15}/>
        </div>
        <div className="feeds-RightButtonArea-skelton">
            <Skeleton width={450} height={15}/>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}