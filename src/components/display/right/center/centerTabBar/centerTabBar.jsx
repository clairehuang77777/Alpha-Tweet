import { clsx } from "clsx"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

export const CenterTabBar = () => {
  //記錄現在點到哪一個tab
  const [tabId, setTabID] = useState(1)
  //點擊tab後轉導
  const navigate = useNavigate()
  const location = useLocation()

   // 同步 URL 與 tabId 狀態
  useEffect(() => {
    if (location.pathname.includes("/user/self/reply")) {
      setTabID(2);
    } else if (location.pathname.includes("/user/self/likes")) {
      setTabID(3);
    } else {
      setTabID(1);
    }
  }, [location.pathname]);

    const handleTabClick = (tabId, path) => {
    if(location.path !== path){
      setTabID(tabId); // 更新當前 Tab
      navigate(path); // 執行導航
    }
  };

  return (
    <div className="tabBar">
      <div className={clsx("center-tab-bar-center-post",{"clicked":tabId===1})} 
      onClick={()=>{handleTabClick(1, "/user/self")}}>
          <button className={clsx("center-tab-bar-text-post",{"clicked":tabId===1})}>
            推文
          </button>
      </div>
      <div className={clsx("center-tab-bar-center-tweet",{"clicked":tabId===2})}
        onClick={() => {handleTabClick(2, "/user/self/reply")}}>
        <button className={clsx("center-tab-bar-text-tweet",{"clicked":tabId===2})}>
          推文與回覆
          </button>
      </div>
      <div className={clsx("center-tab-bar-center-likes",{"clicked":tabId===3})}
      onClick={() => {handleTabClick(3, "/user/self/likes");}}>
        <button className={clsx("center-tab-bar-text-likes",{"clicked":tabId===3})}>
          喜歡的內容
        </button>
      </div>
</div>
  )
}