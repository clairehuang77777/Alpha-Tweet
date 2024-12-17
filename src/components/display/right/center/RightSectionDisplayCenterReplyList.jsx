import { CenterWithLocation } from "./centerHeader/CenterHeaderWithLocation"
import { CenterFeedWithLocation } from "./centerFeeds/CenterFeedWithLocation"
import {CenterBiggerPost} from "./centerPost/CenterBiggerPost"

export const RightSectionDisplayCenterReplyList = () => {
  return (
    <>
    <CenterWithLocation />
    <CenterBiggerPost/>
    <CenterFeedWithLocation feedCount={10}/>
    </>
  )
}