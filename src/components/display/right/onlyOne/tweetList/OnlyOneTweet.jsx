export const OnlyOneTweet=({tweetCount})=>{
  return (
    Array(tweetCount).fill(null).map((_,index)=>(
    <>
    <div key={index} className="adminMain">
  <div className="adminMain-LeftArea">
    <img src="/user.png" className="adminMain-user-photo"></img>
  </div>
  <div className="adminMain-RightArea">
    <div className="adminMain-RightTopArea">
      <div className="adminMain-poster-name">Apple</div>
      <div className="adminMain-poster-id">@apple</div>
      <div className="adminMain-poster-time">∙ 3 小時前</div>
    </div>
    <div className="adminMain-RightCenterArea">
      <div className="adminMain-poster-content">今天天氣超好過的超級開心 我愛Mojo</div>
    </div>
  </div>
</div>
</>
  )))
}