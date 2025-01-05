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