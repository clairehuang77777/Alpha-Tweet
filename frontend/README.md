# Table of Contents
1. [Project Overview](#project-overview)
2. [Update Status](#update-status)
3. [Build With](#build-with)
4. [Project Architecture](#project-architecture)
5. [How to Run with Docker](#how-to-run-with-docker)
6. [API Documentation](#api-documentation)

## Project Overview
Alpha Tweet  
- 🚀  It's a social media website, which provide several function like Browse feeds, personal page... <br/>
- 🚀  This project is containerized with `Docker` to ensure a consistent and reliable environment.

- Browse Feeds & Browse Personal Page  <br/>
  ![Browse](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHpsMDM4OXU4bXdzN3pkNHQ3ZXkzejhydmh5cXEzdWNmNjltMjJmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14j9usUZ8WuRokk4WZ/giphy.gif)
  ![PeronalPage](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajRheWE5MzdibGxmbzl6Y2FwMHVsN293OWVpd3NjZXJsc3FvNGxuZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gGOAOPUAN0cRX179k7/giphy.gif)
- Browse other's Personal Page <br/>
  ![others](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVkMjY4cTd1M3l0bnptMnZhb3NhcHVvejdoN2FocGs5NzJ0dWhkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LuguYRbI8po32d6T5W/giphy.gif)
- Backend management (Browse All User List/Browse All Feeds ) <br/>
  ![UserList](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHVrbXB0cXEzaDAxeHFvZWQ3dm03bTVlZXkzbmx5dnd3c2EwaDdtNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ibwhBfhF50Sxuh5cGN/giphy.gif)
  ![FeedsList](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXd2b3Y2YTE2dzBncGRtZHBzNzRja25uYTB3NnF6Mzc0emI5ZTlvZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZDMPEXXHDw1TG72d8A/giphy.gif)
- Login/ Register <br/>
  ![Register](https://i.ibb.co/1rDYqxd/2024-12-17-11-58-13.png)
- Post/ Follow others/ being followed


## Update status 
- 2024/12/17 Build Frontend
- 2024/12/23 Build alphaTwiiter db
- 2024/12/27 Integrate with api, all data from db
  
## Build With
- **Frontend**: React with Vite
- **Backend**: Node.js + Express
- **DataBase**: MySQL
- **Containerization**: Docker + Docker Compose

## Project Architecture 
- **Frontend**: run in Localhost `5174`
- **Backend**: run in a container exposing port `3000`
- **DataBase**: run in a container exposing port `3306`

  
## How to run with Docker?
###### Prerequisites
- Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) on your system.

#### Steps to Run
1. Clone this repository:
   ```bash
   git clone https://clairehuang77777/your-username/Alpha-Tweet/.git
   cd your-repo-name
2. Run FrontEnd localhost
   ```bash
   npm run dev
3. Build and start the Docker containers:
    ```bash
    docker-compose up --build
4. Access the application:
    ```bash
    Open the browser and go to `http://localhost:5174` or `http://localhost:5174/Alpha-Tweet/`

## API Documentation
### BaseURL:
    http://localhost:3000/api


#### **1. getAllUserData**
- **URL**: `/users`
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
- **URL**: `/users/:UserID`
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
- **URL**: `/UserFollowingFeeds`
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
- **URL**: `/Feeds`
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
- **URL**: `/Feeds/:UserID`
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
- **URL**: `/replies/:ReplierID`
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
- **URL**: `/likes/:LikerUserID`
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
