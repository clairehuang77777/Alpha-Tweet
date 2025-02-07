const axios = window.axios;

const base_URL = import.meta.env.MODE === 'production'? 
import.meta.env.VITE_API_BASE_URL_RENDER :
import.meta.env.VITE_API_BASE_URL_Local;

console.log('Current NODE_ENV:', import.meta.env.MODE);
console.log('Base URL:', base_URL);

export { base_URL }

// export const base_URL = import.meta.env.VITE_API_BASE_URL;
//CRUD串接api設定

export async function getAllUserData(){
  try { 
    const res = await axios.get(`${base_URL}/api/users`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getAllUserData]:',error)
  }
}

export async function getAllFeeds(){
  try { 
    const res = await axios.get(`${base_URL}/api/Feeds`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getAllFeeds]:',error)
  }
}

export async function getUserFollowingFeeds(){
  try { 
    const res = await axios.get(`${base_URL}/api/UserFollowingFeeds`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getUserFollowingFeeds]:',error)
  }
}


export async function getSingleUserFeed(UserID){
  console.log('[getSingleUserFeed] UserID:', UserID); // 調試
  try { 
    const res = await axios.get(`${base_URL}/api/Feeds/${UserID}`);
    console.log(res.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getSingleUserFeed]:',error)
  }
}

export async function getSingleUserData(UserID){
  try { 
    const res = await axios.get(`${base_URL}/api/users/${UserID}`);
    console.log(res.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getSingleUserData]:',error)
    console.error('Error Details:', error.response?.data || error)
  }
}

export async function getSingleUserLike(LikerUserID){
  try { 
    const res = await axios.get(`${base_URL}/api/likes/${LikerUserID}`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getSingleUserLike]:,',error)
    console.error('Error Details:', error.response?.data || error)
  }
}

export async function getSingleUserReply(ReplierID){
  try { 
    const res = await axios.get(`${base_URL}/api/replies/${ReplierID}`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getSingleUserReply]:,',error)
    console.error('Error Details:', error.response?.data || error)
  }
}


//透過api發出請求而非透過<form> action, 才能接收response回應
export async function saveUserAccount(Account,UserName,Email,Password,DoubleCheckPassword){
  console.log(Account,UserName,Email,Password,DoubleCheckPassword )//嘗試能不能取得參數
    try {
    const res = await axios.post(`${base_URL}/api/register`, {
       Account,
       UserName,
       Email,
       Password,
       DoubleCheckPassword
    },{
      header:{"Content-Type":"application/json"}
    })
      console.log(res)
      return res
    }
    catch(erorr){
      console.error('[saveUserAccount],',error)
    } 
}

//把帳號密碼傳給後面
export async function UserLoginRequest(userTypeUserName, userTypePW){
  try{
    const res = await axios.post(`${base_URL}/api/login`, {
      userTypeUserName,
      userTypePW
    })
    console.log(res)
    return res
  }
  catch(error){
    console.error(error)
  }
}

//從username找到userID
export async function getUserIDFromUserName(UserName){
  try {
    const res = await axios.get(`${base_URL}/api/getUserID/${UserName}`)
    console.log(res)
    return res.data
  }
  catch(error){
    console.error(error)
  }
}


export async function postUserFollowingFeeds(UserID,UserIDname, UserName, newPost ,currentTime,photoSrc){
  try {
    const res = await axios.post(`${base_URL}/api/UserFollowingFeeds`,{
      UserID,
      UserIDname,
      UserName,
      newPost,
      currentTime,
      photoSrc
    })
    console.log(res)
    return res
  }
  catch(error){
    console.error(error)
  }
}