import {useLocation} from 'react-router-dom'
import {CenterHeader} from './CenterHeader'
import { images } from '../../../../../assets/images'
import { useNavigate } from 'react-router-dom'


export const CenterWithLocation = () => {
  let location = useLocation().pathname
  console.log(location)
  const navigate = useNavigate()

  //初始化變數
  let rightTitle = ""; // 預設為空字串
  let leftcontent = null; // 預設為空
  let feedCount = null; // 預設為空

  //增加返回首頁功能

  if (location=== '/' ||
    location==='/main' || 
    location ==='/main/tweet' ||
    location==='/replylist_replymodal'){
    rightTitle=<p className="toLeftMainTitle">首頁</p>
  } else if(location.startsWith("/user/comment/")){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="貼文"
  }
  else if (location==='/replylist'){
    leftcontent=<><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></>
    rightTitle="推文"
  }
  else if (location.startsWith('/user/U01') || 
    location.startsWith('/user/likes/U01') || 
    location.startsWith('/user/reply/U01')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="claire"
    feedCount=7
  }else if (location.startsWith('/user/U02') || 
    location.startsWith('/user/likes/U02') || 
    location.startsWith('/user/reply/U02')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="rose"
    feedCount=3
  }
  else if (location.startsWith('/user/U03') || 
    location.startsWith('/user/likes/U03') || 
    location.startsWith('/user/reply/U03')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="Jenny"
    feedCount=5
  }
  else if (location.startsWith('/user/U04') || 
    location.startsWith('/user/likes/U04') || 
    location.startsWith('/user/reply/U04')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="Lisa"
    feedCount=3
  }
  else if (location.startsWith('/user/U05') || 
    location.startsWith('/user/likes/U05') || 
    location.startsWith('/user/reply/U05')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="Charng-Jyh Hu"
    feedCount=2
  }
  else if (location.startsWith('/user/U06') || 
    location.startsWith('/user/likes/U06') || 
    location.startsWith('/user/reply/U06')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="Tzu-Miao Hung"
    feedCount=3
  }
  else if (location.startsWith('/user/U07') || 
    location.startsWith('/user/likes/U07') || 
    location.startsWith('/user/reply/U07')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="MenHang Liu"
    feedCount=4
  }
  else if (location.startsWith('/user/U08') || 
    location.startsWith('/user/likes/U08') || 
    location.startsWith('/user/reply/U08')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="Chengwu"
    feedCount=6
  }
  else if (location.startsWith('/user/U09') || 
    location.startsWith('/user/likes/U09') || 
    location.startsWith('/user/reply/U09')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="Piying"
    feedCount=4
  }
  else if (location.startsWith('/user/U10') || 
    location.startsWith('/user/likes/U10') || 
    location.startsWith('/user/reply/U10')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="ShengMing"
    feedCount=4
  }
  else if (location.startsWith('/user/U11') || 
    location.startsWith('/user/likes/U11') || 
    location.startsWith('/user/reply/U11')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="Yiching"
    feedCount=8
  }
  else if (location.startsWith('/user/U12') || 
    location.startsWith('/user/likes/U12') || 
    location.startsWith('/user/reply/U12')
  ){
    leftcontent=<><picture>
            <source srcset={images.back_dark} media="(prefers-color-scheme: dark)"></source><img src={images.back} className="middle-header-leftarea-img"></img><img className="hover-circle-header" onClick={()=>navigate("/")}></img></picture></>
    rightTitle="YiSheng"
    feedCount=9
  }
  


  return (
  <CenterHeader 
    leftcontent={leftcontent} 
    rightTitle={rightTitle} 
    feedCount={feedCount} />
  )
}
