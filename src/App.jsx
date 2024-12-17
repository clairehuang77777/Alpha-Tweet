import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage, MainPage, RegisterPage, BackendLoginPage, ReplyListPage, UserSelfPage, UserSelfReplyPage, UserSelfLikesPage, AdminMainPage, AdminMainUserPage } from './page/index'
import { useState } from 'react'
import {popUpContext} from './components/display/popUpContext'

function App() {
  const [popUp, setPopUp] = useState(false)
  const [editMode,setEditMode] = useState(false)

  const basename = import.meta.env.VITE_BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <popUpContext.Provider value={{popUp, setPopUp, editMode, setEditMode}}>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/main/tweet' element={<MainPage />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/BackendLogin' element={<BackendLoginPage />} />
          <Route path='/replylist' element={<ReplyListPage /> }/>
          <Route path='/user/self' element={<UserSelfPage /> }/>
          <Route path='/user/self/edit' element={<UserSelfPage /> }/>
          <Route path='/user/other' element={<UserSelfPage /> }/>
          <Route path='/user/self/reply' element={<UserSelfReplyPage />}/>
          <Route path='/user/self/likes' element={<UserSelfLikesPage /> }/>
          <Route path='/admin_main' element={<AdminMainPage /> }/>
          <Route path='/admin_user' element={<AdminMainUserPage /> }/>
        </Routes>
      </popUpContext.Provider>
    </BrowserRouter>
  )
}

export default App
