import { CenterWithLocation } from "./centerHeader/CenterHeaderWithLocation"
import {CenterFeed} from "./centerFeeds/CenterFeed"
import { CenterPost } from "./centerPost/CenterPost"
import {CenterFeedForMainFeed} from "./MainFeeds/CenterFeedForMainFeeds"
export const RightSectionDisplayCenterMain = () => {
  return (
    <>
    <CenterWithLocation />
    <CenterPost />
    <CenterFeedForMainFeed/>
    </>
  )
}