import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CenterFeed } from "./CenterFeed";
import { ButtonArea } from "./FeedsCenterArea/ButtonArea";
import { ReplyArea } from "./FeedsCenterArea/ReplyArea";
import { ButtonAreaWithRedHeart } from "./FeedsCenterArea/ButtonAreaWithRedHeart";
import { myFeedsContext } from "../../../../../myFeedsContext";
import { myLikesContext } from "../../../../../myLikesContext";
import { getSingleUserFeedFromUserFollowingFeed, getSingleUserLike, getSingleUserReply } from "../../../../../../../backend/api/alphatwitter";
import { FeedSkelton } from "./FeedSkelton";
import { DeletePostBtn } from "./FeedsCenterArea/DeletePostBtn";
import { popUpContext } from "../../../../../popUpContext";

export const CenterFeedWithLocation = () => {
  const { myFeeds, setMyFeeds } = useContext(myFeedsContext);
  const { myLikes, setMyLikes } = useContext(myLikesContext);
  const location = useLocation();
  const { UserID, LikerUserID, ReplierID } = useParams();
  const {deletePopUp} = useContext(popUpContext)
  const{deletePID} = useContext(popUpContext)

  // 本地状态来决定显示的内容
  const [display, setDisplay] = useState([]);
  const [RightCenterReplyContent, setRightCenterReplyContent] = useState(null);
  const [RightCenterButtonContent, setRightCenterButtonContent] = useState(null);
  //feedSkeleton
  const [isLoading, setIsLoading]=useState(true)


  // 默认数据
  const defaultMyFeeds = [
    {
      PostID: "P01",
      PostContent: "懒骨头！懒骨头！",
      PostTime: "2024-12-19T11:42:52.000Z",
      UserID: "U01",
      UserIDname: "@claire6644",
      UserName: "claire",
      CountPostReply: 3,
      CountPostLike: 7,
    },
  ];

  const defaultMyLikes = [
    {
      PostID: "P01",
      UserID: "U01",
      PostContent: "懒骨头！懒骨头！",
      UserName: "claire",
      UserIDname: "@claire6644",
      LikerID: "L010101",
      LikerUserID: "U01",
      LikerUserName: "claire",
      CountPostReply: 3,
      CountPostLike: 7,
    },
  ];

  const defaultMyReplies = [
    {
    PostID: "P04",
    UserName: "rose",
    UserID: "U02",
    ReplyID: "R0201001",
    ReplierName: "claire",
    ReplierIDname: "@claire6644",
    ReplierID: "U01",
    ReplierContent: "Rose我愛你!!",
    ReplierTime: "2024-12-27T10:00:00"
    }
  ]

  // 使用单一的 useEffect 来处理逻辑
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        if (location.pathname.startsWith("/user/likes")) {
          // 处理 Likes 数据
          const myLikesData = await getSingleUserLike(LikerUserID);
          if (isMounted) {
            setDisplay(myLikesData || defaultMyLikes);
            setRightCenterButtonContent(<ButtonAreaWithRedHeart />);
            setRightCenterReplyContent(null);
            setIsLoading(false)
          }
        } else if (location.pathname.startsWith("/user/reply")) {
          // 处理 Reply 数据
          const myReplydata = await getSingleUserReply(ReplierID)
          if (isMounted) {
            setDisplay(myReplydata || defaultMyReplies)
            setRightCenterButtonContent(null);
            setRightCenterReplyContent(<ReplyArea displayReplyeeName={(
              myReplydata && myReplydata.length > 0 ? myReplydata[0].UserName : defaultMyReplies[0].UserName) || "Unknown"}/>)
            setIsLoading(false)
            }
          }
         else if (location.pathname.startsWith("/user"))
          {
          const UserFollowingID = UserID
          // 处理 Feeds 数据
          const myFeedsData = await getSingleUserFeedFromUserFollowingFeed(UserFollowingID);
          if (isMounted) {
            setDisplay(myFeedsData || defaultMyFeeds);
            console.log(display)
            setRightCenterButtonContent(<ButtonArea />);
            setRightCenterReplyContent(null);
            setIsLoading(false)
            }
          }
      }
       catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // 防止组件卸载后更新状态
    };
  }, [location.pathname, UserID, LikerUserID,deletePopUp, deletePID]);

  return (
    <>
    {isLoading ? (
      <FeedSkelton count={10}/>
    ) : (
      (Array.isArray(display) ? display : []).map((item, index) => {
        return (
          <CenterFeed
            key={item.PID}
            RightCenterReplyArea={RightCenterReplyContent}
            RightCenterButtonArea={
              location.pathname.startsWith("/user/U") || location.pathname.startsWith("/user/likes") ? (<ButtonArea item={item}/>):null}
            DeleteIconArea={location.pathname.startsWith("/user/U") ? (<DeletePostBtn item={item}/>
            ) : null}
            item={item}
          />
        )
      })
  )}
    </>
  );
};
