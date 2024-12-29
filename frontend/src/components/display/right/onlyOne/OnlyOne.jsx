import { OnlyOneHeader } from "./header/OnlyOneHeader"
import {OnlyOneTweet} from "./tweetList/OnlyOneTweet"

export const OnlyOne = () => {
  return (
    <>
    <OnlyOneHeader headername={"推文清單"}/>
    <OnlyOneTweet/>
    </>
  )
}