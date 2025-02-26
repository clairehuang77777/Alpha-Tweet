# Table of Contents
1. [Project Overview](#project-overview)
2. [Build With](#build-with)
3. [Features](#Features)
4. [Project Architecture](#project-architecture)
5. [API Documentation](#api-documentation)

## Project Overview
- Alpha Tweet is a social media platform that offers features like browsing feeds, personal pages, and more. <br/>
- 🚀 The project is live! Access it now 🚀 <a href="https://clairehuang77777.github.io/Alpha-Tweet/login">here</a>.

## Features
- Login in (test account: claire / abc123)
- Press Likes / Cancel Likes
- Create Post
- Leave a comment
- Browse Feeds
- Support Dark Mode
- Support Lazy loading


## Build With
- **Frontend**: React with Vite
- **Backend**: Node.js + Express
- **DataBase**: PostgreSQL

## Project Architecture 
- **Frontend**: Hosted on [GitHub Pages](https://pages.github.com/)
- **Backend**: Deployed using [Render](https://render.com/)
- **Database**: Hosted on Render's PostgreSQL


## Screenshot
- User Login  <br/>
  ![Login](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdml5czlhOHg4MndtZ3B2bzE2em1ybTl0aWF1cjloNThubWxxZ2g5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xdYWahjAoq1l6RsSOJ/giphy.gif)
- Press Likes / Cancel Likes <br/>
  ![PressLikes](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2wyYm5id3lnMTVtZ2hvNGFidm9sZ28xaThrZGt6bXdjcTR4NHRvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NHotMRcyjDgcU9rR1G/giphy.gif)
- Create Post <br/>
![CreatePost](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamp2cTRwcGVleDhidW9zeXNhYnQydGFucmp4MzE4Z3oybTFnemdpayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1DLsm9UcaSzgvippaT/giphy.gif)
- Leave a comment <br/>
![comment](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3U1eGp3NzRia2diajNyc3N4bnE4NWMzbWpna3dkY3BrbzN3ZDQxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h47nPAeEBIj1OujC4m/giphy.gif)
- Browse Feeds <br/>
![BrowseFeeds](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVucXRvaDRoMjg3ZnpyZ2lhOWhja3ltaTM3czlhejJ4bjZmanF0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cAES74hEtZdltL3LYq/giphy.gif)
- Support Dark Mode & Lazy loading <br/>
![Support Dark Mode](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzdwMGI3OHl2Ym0yNmVubmE4OGdycTB6Ym16bTcyMjcwYXVsY293YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lJPiTwkHY9SHII65Ro/giphy.gif)



## API Documentation
### BaseURL:
    https://alpha-tweet-backend.onrender.com


#### **1. getAllUserData**
- **URL**: `/api/users`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "data": [
        {
            "UserID": "U01",
            "UserName": "claire",
            "UserIDname": "@claire6644",
            "CountUserFollowing": 9,
            "CountUserFollower": 11,
            "CountUserFeeds": 7,
            "UserQuote": "Changing career...",
            "CountUserLikesOthers": 34,
            "CountUserReplyOthers": 25,
            "photoSrc": "https://i.ibb.co/9b3xXJ6/3.jpg",
            "photoBackgroundSrc": "https://i.ibb.co/0Fwc4Sf/l.png"
        },

#### **2. getSingleUserData**
- **URL**: `/api/users/:UserID`
- **Method**: `GET`
- **Query Parameters**:
  - `UserID` : fill in UserID of user's personal info data you want to see (for example: U01).
- **Response**:
  ```json
  {
    "data": [
        {
            "UserID": "U01",
            "UserName": "claire",
            "UserIDname": "@claire6644",
            "CountUserFollowing": 9,
            "CountUserFollower": 11,
            "CountUserFeeds": 7,
            "UserQuote": "Changing career...",
            "CountUserLikesOthers": 34,
            "CountUserReplyOthers": 25,
            "photoSrc": "https://i.ibb.co/9b3xXJ6/3.jpg",
            "photoBackgroundSrc": "https://i.ibb.co/0Fwc4Sf/l.png"
        },



#### **3. getUserFollowingFeeds**
- **URL**: `/api/UserFollowingFeeds`
- **Method**: `GET`
- **Response**:
  ```json
   {
     "data": [
          {
              "UserID": "U01",
              "UserFollowingID": "U02",
              "UserFollowingIDname": "@RosienRose",
              "UserFollowingUserName": "Rose",
              "UserFollowingCountPostReply": 3,
              "UserFollowingCountPostLike": 3,
              "PostID": "P08",
              "PostContent": "Meet me at APT!",
              "PostTime": "2024-12-19T01:46:51.000Z",
              "photoSrc": "https://i.ibb.co/1XKqQWY/11.png"
          },
          ...
        

#### **4. getAllFeeds**
- **URL**: `/api/Feeds`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "data": [
        {
            "PostID": "P01",
            "PostContent": "懶骨頭！懶骨頭！",
            "PostTime": "2024-12-19T19:42:52.000Z",
            "UserID": "U01",
            "UserIDname": "@claire6644",
            "UserName": "claire",
            "CountPostReply": 3,
            "CountPostLike": 7,
            "photoSrc": "https://i.ibb.co/9b3xXJ6/3.jpg"
        },


#### **5. getSingleUserFeed**
- **URL**: `/api/Feeds/:UserID`
- **Method**: `GET`
- **Query Parameters**:
  - `UserID` : fill in UserID of user's feed you want to see (for example: U01).
- **Response**:
  ```json
  {
    "data": [
        {
            "PostID": "P01",
            "PostContent": "懶骨頭！懶骨頭！",
            "PostTime": "2024-12-19T19:42:52.000Z",
            "UserID": "U01",
            "UserIDname": "@claire6644",
            "UserName": "claire",
            "CountPostReply": 3,
            "CountPostLike": 7,
            "photoSrc": "https://i.ibb.co/9b3xXJ6/3.jpg"
        },

#### **6. getSingleUserReply**
- **URL**: `/api/replies/:ReplierID`
- **Method**: `GET`
- **Query Parameters**:
  - `ReplierID` : Fill in the which user's reply content you want to see (for example: U01).
- **Response**:
  ```json
      "data": [
        {
            "PostID": "P04",
            "UserName": "rose",
            "UserID": "U02",
            "ReplyID": "R0402001",
            "ReplierName": "claire",
            "ReplierIDname": "@claire6644",
            "ReplierID": "U01",
            "ReplierContent": "快瘋了!!!我愛你rose!!!",
            "ReplierTime": "2024-12-21T13:50:39.000Z",
            "photoSrc": "https://i.ibb.co/1XKqQWY/11.png"
        }

#### **7. getSingleLikerUserID**
- **URL**: `/api/likes/:LikerUserID`
- **Method**: `GET`
- **Query Parameters**:
  - `LikerUserID` : Fill in the which user's like content you want to see (for example: U01).
- **Response**:
  ```json
      "data": [
        {
            "PostID": "P01",
            "UserID": "U01",
            "PostContent": "懶骨頭！懶骨頭！",
            "LikerID": "L010101",
            "LikerUserID": "U01",
            "LikerUserName": "claire",
            "CountPostReply": 3,
            "CountPostLike": 7,
            "PostUserName": "claire",
            "PostUserSrc": "https://i.ibb.co/9b3xXJ6/3.jpg"
        },
