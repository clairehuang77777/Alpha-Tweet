const axios = window.axios;

const base_URL = "/api";
//CRUD串接api設定

export async function getAllUserData(){
  try { 
    const res = await axios.get(`${base_URL}/users`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getAllUserData]:',error)
  }
}


export async function getAllFeeds(){
  try { 
    const res = await axios.get(`${base_URL}/Feeds`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getAllFeeds]:',error)
  }
}

export async function getUserFollowingFeeds(){
  try { 
    const res = await axios.get(`${base_URL}/UserFollowingFeeds`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getUserFollowingFeeds]:',error)
  }
}

export async function getSingleUserFeed(UserID){
  try { 
    const res = await axios.get(`${base_URL}/Feeds/${UserID}`);
    console.log(res.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getSingleUserFeed]:',error)
  }
}

export async function getSingleUserData(UserID){
  try { 
    const res = await axios.get(`${base_URL}/Users/${UserID}`);
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
    const res = await axios.get(`${base_URL}/likes/${LikerUserID}`);
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
    const res = await axios.get(`${base_URL}/replies/${ReplierID}`);
    console.log(res.data.data)
    return res.data.data
  }
  catch(error) {
    console.error('[getSingleUserReply]:,',error)
    console.error('Error Details:', error.response?.data || error)
  }
}