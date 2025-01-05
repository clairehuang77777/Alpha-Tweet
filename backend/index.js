//建立server
import express from 'express';
// import mysql from 'mysql2/promise';
import pkg from 'pg'; //匯入整個模組
const { Pool } = pkg //解構出Pool
// 導入dotenv 訪問.env
import dotenv from 'dotenv'
// 處理換域
import cors from 'cors';

//導入環境變數
dotenv.config()

//*-----如果在測試環境做以下連接---NODE_ENV=development--*//
//依當下環境調整連線變數
const getPoolConfig = () => {
  if (process.env.NODE_ENV === 'production'){
    return{
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
    //建立render postgreSQL連線
    }
  } else {
    return {
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT
      //建立local postgreSQL連線
    }
  } 
}

//建立連線池
const pool = new Pool(getPoolConfig())

//測試連線
pool.connect()
  .then(client => {
    console.log("Connect to PGSQL")
    console.log(`you are at${process.env.NODE_ENV}`)
    client.release(); //釋放連線
  })
  .catch(err => console.log('Connection error',err.stack))


//建立Express應用程式
const app = express()
const port = process.env.PORT || 3000 // 使用環境變數設置 API 埠

//cors設定
const allowCors = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      origin: (origin, callback) => {
        const allowedOrigins = [
          'https://clairehuang77777.github.io/Alpha-Tweet', // 生產環境
          'http://localhost:5173' // 本地開發環境
        ];
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: 'GET, POST',
      credentials: true
    };
  } else {
    return {
      origin: 'http://localhost:5173', // 本地開發
      methods: 'GET, POST',
      credentials: true
    };
  }
};

app.use(cors(allowCors()));


let resultsOfUsers = []
// let resultOfUserFollowingFeeds = []
let resultOfFeeds = []


// 把結果返回到3000的response上
// 製作api 'GET users'
app.get('/api/users', async(req, res) => {
  try {
    const { rows: users } = await pool.query(
      'SELECT * FROM "user";'
    )
    resultsOfUsers = users;
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

//--------------------------------------------//
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
app.get('/api/Feeds/:UserID', async (req, res) => {
  const { UserID } = req.params; // 提取 URL 中的 UserID
  try {
    const { rows: singleUserFeeds } = await pool.query(
      'SELECT * FROM "feeds" WHERE "UserID" = $1;', [UserID]
    );
    if (singleUserFeeds.length === 0) {
      return res.status(404).send({
        status: "failed",
        message: "No feeds found for this user"
      });
    }
    console.log('[Query Result - Feeds]:', singleUserFeeds);
    res.send({
      status: "success",
      message: "Data fetched successfully",
      data: singleUserFeeds
    });
  } catch (err) {
    console.error('[Error in /api/Feeds/:UserID]', err.message);
    res.status(500).send({
      status: "failed",
      error: err.message
    });
  }
});


// 製作api 'GET User-Reply page'
app.get('/api/replies/:ReplierID', async (req, res) => {
  const { ReplierID } = req.params; // 提取 URL 中的 ReplierID
  try {
    const { rows: singleUserReply } = await pool.query(
      'SELECT * FROM "FirstReplyTable" WHERE "ReplierID" = $1;', [ReplierID]
    );
    if (singleUserReply.length === 0) {
      return res.status(404).send({
        status: "failed",
        message: "No replies found for this user"
      });
    }
    console.log('[Query Result - Replies]:', singleUserReply);
    res.send({
      status: "success",
      message: "Data fetched successfully",
      data: singleUserReply
    });
  } catch (err) {
    console.error('[Error in /api/replies/:ReplierID]', err.message);
    res.status(500).send({
      status: "failed",
      error: err.message
    });
  }
});

// 製作api 'GET User-Like page'
app.get('/api/likes/:LikerUserID', async (req, res) => {
  const { LikerUserID } = req.params; // 提取 URL 中的 LikerUserID
  try {
    const { rows: singleUserLike } = await pool.query(
      'SELECT * FROM "LikeJoinFeeds" WHERE "LikerUserID" = $1;', [LikerUserID]
    );
    if (singleUserLike.length === 0) {
      return res.status(404).send({
        status: "failed",
        message: "No likes found for this user"
      });
    }
    console.log('[Query Result - Likes]:', singleUserLike);
    res.send({
      status: "success",
      message: "Data fetched successfully",
      data: singleUserLike
    });
  } catch (err) {
    console.error('[Error in /api/likes/:LikerUserID]', err.message);
    res.status(500).send({
      status: "failed",
      error: err.message
    });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})