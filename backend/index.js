//建立server
import express from 'express';
import mysql from 'mysql2/promise';
const app = express()
const port = process.env.PORT || 3000 // 使用環境變數設置 API 埠
import cors from 'cors';
app.use(cors());



// 建立mySQL連線
let resultsOfUsers = []
let resultOfSingleUser = []
let resultOfUserFollowingFeeds = []
let resultOfFeeds = []
let resultOfSingleUserFeeds = []
let resultOfSingleUserReply = []
let resultOfSingleUserLike = []

//儲存物件
let requestUserID = ''
let requestLikerID = ''
let requestReplyID = ''

//建立simple query連線,
const connection = await mysql.createConnection({
  host: 'host.docker.internal', // 指向宿主機的 MySQL
  user: 'root',
  password: 'Jayesslee0604@',
  database: 'alphaTwitter',
  port: 3306, // 本地 MySQL 的埠
});

// 把結果返回到3000的response上
// 製作api 'GET users'
app.get('/api/users', async(req, res) => {
  try {
    const [users] = await connection.query(
      'SELECT * FROM `user`'
    )
    resultsOfUsers = users;
    // console.log(resultsOfUsers); // results contains rows returned by server
    res.send({
      status:"success",
      message: "Data fetched successfully",
      data: resultsOfUsers})
    return users.data

  } catch (err) {
    console.log(err);
    res.send({
      status:"failed"
    })
  }
})

// 製作api 'GET single users'
app.get('/api/users/:UserID',async(req, res) => {
  //從網址上拉下要查詢的UserID
  requestUserID = req.params.UserID
  // 儲存查詢結果
    try {
      const [singleUser] = await connection.query(
        'SELECT * FROM `user` WHERE `userID` = ?',[requestUserID])
      resultOfSingleUser = singleUser;
      console.log(resultOfSingleUser); 
      res.send({
        status:"success",
        message: "Data fetched successfully",
        data: resultOfSingleUser})
    } catch (err) {
      console.log(err);
      res.send({
        status:"failed"
      })
    }
})

// 製作api 'GET result Of User Following Feeds'
app.get('/api/UserFollowingFeeds', async(req, res) => {
  try {
    const [UserFollowingFeeds] = await connection.query(
      'SELECT * FROM `UserFollowingFeeds`'
    )
    resultOfUserFollowingFeeds = UserFollowingFeeds;
    // console.log(resultsOfUsers); // results contains rows returned by server
    res.send({
        status:"success",
        message: "Data fetched successfully",
        data: resultOfUserFollowingFeeds})
    return resultOfUserFollowingFeeds.data
  } catch (err) {
    console.log(err);
    res.send({
        status:"failed"
      })
  }
  res.send(resultOfUserFollowingFeeds)
})


// 製作api 'GET result Of All Feeds'
app.get('/api/Feeds', async(req, res) => {
  try {
    const [Feeds] = await connection.query(
      'SELECT * FROM `Feeds`'
    )
    resultOfFeeds = Feeds;
    // console.log(resultsOfUsers); // results contains rows returned by server
    res.send({
        status:"success",
        message: "Data fetched successfully",
        data: resultOfFeeds})
  } catch (err) {
    console.log(err);
  }
})

// 製作api 'GET result Of Single User Feeds'
app.get('/api/Feeds/:UserID',async(req, res) => {
  //從網址上拉下要查詢的UserID
  requestUserID = req.params.UserID
  // 儲存查詢結果
    try {
      const [singleUserFeed] = await connection.query(
        'SELECT * FROM `Feeds` WHERE `userID` = ?',[requestUserID])
      resultOfSingleUserFeeds = singleUserFeed;
      console.log(resultOfSingleUserFeeds); 
      res.send({
        status:"success",
        message: "Data fetched successfully",
        data: resultOfSingleUserFeeds})
    } catch (err) {
      console.log(err);
      res.send({
        status:"failed"
      })
    }
})


// 製作api 'GET User-Reply page'
app.get('/api/replies/:ReplierID',async(req, res) => {
  //從網址上拉下要查詢的UserID
  requestReplyID = req.params.ReplierID
  console.log('Query content:', requestReplyID);
  // 儲存查詢結果
    try {
      const [singleUserReply] = await connection.query(
        'SELECT * FROM `FirstReplyTable` WHERE `ReplierID` = ?',[requestReplyID])
        console.log('Query Result:', singleUserReply);
      resultOfSingleUserReply = singleUserReply;
      console.log(resultOfSingleUserReply); 
      res.send({
        status:"success",
        message: "Data fetched successfully",
        data: resultOfSingleUserReply})
    } catch (err) {
      console.log(err);
      res.send({
        status:"failed"
      })
    }
})

// 製作api 'GET User-Like page'
app.get('/api/likes/:LikerUserID',async(req, res) => {
  //從網址上拉下要查詢的UserID
  requestLikerID = req.params.LikerUserID
  // 儲存查詢結果
    try {
      const [singleUserReply] = await connection.query(
        'SELECT * FROM `LikeJoinFeeds` WHERE `LikerUserID` = ?',[requestLikerID])
      resultOfSingleUserLike = singleUserReply;
      res.send({
        status:"success",
        message: "Data fetched successfully",
        data: resultOfSingleUserLike})
    } catch (err) {
      console.log(err);
      res.send({
        status:"failed"
      })
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})