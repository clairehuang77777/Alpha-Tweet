//建立server
import express from 'express';
// import mysql from 'mysql2/promise';
import pkg from 'pg'
import dotenv from 'dotenv'
dotenv.config()


const { Pool } = pkg;
const app = express()
const port = process.env.PORT || 3000 // 使用環境變數設置 API 埠

import cors from 'cors';
app.use(cors({
  origin: 'https://clairehuang77777.github.io', // 允許 GitHub Pages 的域名
  methods: 'GET, POST', // 允許的方法
  credentials: false // 如果需要攜帶憑證
}));


// 建立mySQL連線
let resultsOfUsers = []
let resultOfSingleUser = []
// let resultOfUserFollowingFeeds = []
let resultOfFeeds = []
let resultOfSingleUserFeeds = []
let resultOfSingleUserReply = []
let resultOfSingleUserLike = []

//儲存物件
let requestUserID = ''
let requestLikerID = ''
let requestReplyID = ''

// //建立simple query連線,
// const connection = await mysql.createConnection({
//   host: 'localhost', // 指向宿主機的 MySQL
//   user: 'root',
//   password: 'Jayesslee0604@',
//   database: 'alphaTwitter',
//   port: 3306, // 本地 MySQL 的埠
// });

//建立render postgreSQL連線
const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // 啟用 SSL 並忽略未授權的憑證,
});
console.log('Database URL', process.env.DATABASE_URL)

//測試連線
pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL');
        return client.release();
    })
    .catch(err => console.error('Connection error', err.stack));

//測試查詢
pool.query('SELECT * FROM user LIMIT 1;')
      .then(res => console.log(res.rows))
      .catch(err => console.error(err.stack));

// 把結果返回到3000的response上
// 製作api 'GET users'
app.get('/api/users', async(req, res) => {
  try {
    const { rows: users } = await pool.query(
      'SELECT * FROM "user";'
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
      status:"failed",  error: err.message
    })
  }
})

// 製作api 'GET single users'
app.get('/api/users/:UserID', async (req, res) => {
  const { UserID } = req.params; // 提取 URL 中的 UserID
  try {
    const { rows: singleUser } = await pool.query(
      'SELECT * FROM "user" WHERE "UserID" = $1;', [UserID] // 修正佔位符
    );
    if (singleUser.length === 0) {
      return res.status(404).send({
        status: "failed",
        message: "User not found"
      });
    }
    res.send({
      status: "success",
      message: "Data fetched successfully",
      data: singleUser
    });
  } catch (err) {
    console.error('[Error in /api/users/:UserID]', err.message);
    res.status(500).send({
      status: "failed",
      error: err.message
    });
  }
});

// 製作api 'GET result Of User Following Feeds'
app.get('/api/UserFollowingFeeds', async(req, res) => {
  try {
    const { rows: UserFollowingfeeds } = await pool.query(
      'SELECT * FROM "UserFollowingFeeds";'
    )
    // console.log(resultsOfUsers); // results contains rows returned by server
    res.send({
        status:"success",
        message: "Data fetched successfully",
        data: UserFollowingfeeds})
    return UserFollowingfeeds.data
  } catch (err) {
    console.log(err);
    res.send({
        status:"failed"
      })
  }
})


// 製作api 'GET result Of All Feeds'
app.get('/api/Feeds', async(req, res) => {
  try {
    const { rows: feeds } = await pool.query(
      'SELECT * FROM "Feeds";'
    )
    resultOfFeeds = feeds;
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
      const { rows: singleUserFeeds } = await pool.query(
        'SELECT * FROM "Feeds" WHERE "userID" = $1',[requestUserID])
      resultOfSingleUserFeeds = singleUserFeeds;
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
      const { rows: singleUserReply } = await pool.query(
        'SELECT * FROM "FirstReplyTable" WHERE "ReplierID" = $1',[requestReplyID])
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
      const { rows: singleUserReply } = await pool.query(
        'SELECT * FROM "LikeJoinFeeds" WHERE "LikerUserID" = $1',[requestLikerID])
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