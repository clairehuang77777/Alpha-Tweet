
import { useContext } from "react"
import { popUpContext } from "../../../../../popUpContext"
import clsx from "clsx"

export const CenterHeader = ({leftcontent=null, rightTitle="首頁", feedCount=null }) => {
  const {popUp} = useContext(popUpContext)
  return (
  <div className={clsx("middle-header",{"popup":popUp})}>
    <div className="middle-header-leftarea">
      {leftcontent || null}
    </div>
    <div className="middle-header-rightarea">
      <div className="middle-header-title">{rightTitle}</div>
      {feedCount && <div className="feed-count">{feedCount} 推文</div>}
    </div>
  </div>
  )
}