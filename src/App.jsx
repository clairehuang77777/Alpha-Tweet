import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage, MainPage, RegisterPage, BackendLoginPage, ReplyListPage, UserSelfPage, UserSelfReplyPage, UserSelfLikesPage, AdminMainPage, AdminMainUserPage } from './page/index'
import { useState } from 'react'
import {popUpContext} from './components/display/popUpContext'
import { userContext } from './userContext'
import { feedsContext } from './feedsContext'
import {feedsIFollowContext} from './feedsIFollowContext'
import { myIntroDataContext } from './myIntroDataContext'
import { myFeedsContext } from './myFeedsContext'
import { myLikesContext } from './myLikesContext'

function App() {
  const [popUp, setPopUp] = useState(false)
  const [editMode,setEditMode] = useState(false)
  const [users, setUsers] = useState([])
  const [feeds, setFeeds] = useState([])
  const [feedsIFollow, setFeedsIFollow] = useState([])
  const [myIntroData, setMyIntroData] = useState([])
  const [myFeeds, setMyFeeds] = useState([])
  const [myLikes, setMyLikes] = useState([])


  const basename = import.meta.env.VITE_BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <popUpContext.Provider value={{popUp, setPopUp, editMode, setEditMode}}>
      <userContext.Provider value={{users, setUsers}}>
      <feedsContext.Provider value={{feeds, setFeeds}}>
      <feedsIFollowContext.Provider value={{feedsIFollow, setFeedsIFollow}}>
      <myIntroDataContext.Provider value ={{myIntroData, setMyIntroData}}>
      <myFeedsContext.Provider value={{myFeeds, setMyFeeds}}>
      <myLikesContext.Provider value={{myLikes, setMyLikes}}>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/main/tweet' element={<MainPage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/BackendLogin' element={<BackendLoginPage />} />
          <Route path='/replylist' element={<ReplyListPage /> }/>
          <Route path='/user/:UserID' element={<UserSelfPage /> }/>
          <Route path='/user/self/edit' element={<UserSelfPage /> }/>
          <Route path='/user/other' element={<UserSelfPage /> }/>
          <Route path='/user/reply/:ReplierID' element={<UserSelfReplyPage />}/>
          <Route path='/user/likes/:LikerUserID' element={<UserSelfLikesPage /> }/>
          <Route path='/admin_main' element={<AdminMainPage /> }/>
          <Route path='/admin_user' element={<AdminMainUserPage /> }/>
        </Routes>
      </myLikesContext.Provider>
      </myFeedsContext.Provider>
      </myIntroDataContext.Provider>
      </feedsIFollowContext.Provider>
      </feedsContext.Provider>
      </userContext.Provider>
      </popUpContext.Provider>
    </BrowserRouter>
  )
}

export default App