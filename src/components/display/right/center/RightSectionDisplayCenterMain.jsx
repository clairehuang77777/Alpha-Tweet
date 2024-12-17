import { CenterWithLocation } from "./centerHeader/CenterHeaderWithLocation"
import {CenterFeed} from "./centerFeeds/CenterFeed"
import { CenterPost } from "./centerPost/CenterPost"
import { CenterFeedWithLocation } from "./centerFeeds/CenterFeedWithLocation"

export const RightSectionDisplayCenterMain = () => {
  return (
    <>
    <CenterWithLocation />
    <CenterPost />
    <CenterFeedWithLocation feedCount={10}/>
    </>
  )
}