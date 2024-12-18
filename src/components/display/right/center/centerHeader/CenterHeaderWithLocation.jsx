import {useLocation} from 'react-router-dom'
import {CenterHeader} from './CenterHeader'
import { images } from '../../../../../assets/images'


export const CenterWithLocation = () => {
  let location = useLocation().pathname
  console.log(location)

  //初始化變數
  let rightTitle = ""; // 預設為空字串
  let leftcontent = null; // 預設為空
  let feedCount = null; // 預設為空

  if (location=== '/' ||
    location==='/main' || 
    location ==='/main/tweet' ||
    location==='/replylist_replymodal'){
    rightTitle="首頁"
  } 
  else if (location==='/replylist'){
    leftcontent=<img src={images.back}className="middle-header-leftarea-img"></img>
    rightTitle="推文"
  }
  else if (location==='/user/self' || 
    location==='/user/self/likes' || 
    location==='/user/self/reply'
  ){
    leftcontent=<img src={images.back}className="middle-header-leftarea-img"></img>
    rightTitle="RosienRose"
    feedCount=25
  }else if (location==='/user/other' || 
    location==='/user/other/likes' || 
    location==='/user/other/reply'
  ){
    leftcontent=<img src={images.back}className="middle-header-leftarea-img"></img>
    rightTitle="Jennie"
    feedCount=18
  }

  return (
  <CenterHeader 
    leftcontent={leftcontent} 
    rightTitle={rightTitle} 
    feedCount={feedCount} />
  )
}
