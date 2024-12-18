import { images } from "../../../../../assets/images"


export const CenterBiggerPost = () => {
  return (
    <div className="bigger-post">
      <div className="bigger-post-top-area">
        <div className="bigger-post-top-area-left">
          <img className="post-user-photo" src={images.user} alt="feeds-photo"></img>
        </div>
        <div className="bigger-post-top-area-right">
          <div className="feeds-poster-name">Apple</div>
          <div className="feeds-poster-id">@apple</div>
        </div>
      </div>
      <div className="bigger-post-center-area">
        <div className="bigger-post-center-area-post">
          我的心情閃閃爍爍的, 霓虹燈可比阮心情四邊無人冷清清, 身軀陣陣冷
          為何命運親像時鐘不知何時停? 為何人生親像海湧滾啊滾袂停我一生我一生?
        </div>
        <div className="bigger-post-center-area-posttime">
          <div className="bigger-post-center-area-posttimehour">
            上午 10:05
          </div>
          <div className="bigger-post-center-area-posttimedate">
            ・2020年6月10日
          </div>
        </div>
        <div className="bigger-post-button-area-replyandlike">
          <div className="bigger-post-button-area-reply">
            <div className="bigger-post-button-area-reply-num">34</div>
            回覆
          </div>
          <div className="bigger-post-button-area-like">
            <div className="bigger-post-button-area-like-num">808</div>喜歡次數
          </div>
        </div>
        <div className="bigger-post-button-area-icon">
          <div className="bigger-post-button-area-replyicon">
            <img src={images.comment} alt="replybtn"></img>
          </div>
          <div className="bigger-post-button-area-likeicon">
            <img src={images.heart} alt="likebtn"></img>
          </div>
        </div>
      </div>
</div>
  )
}