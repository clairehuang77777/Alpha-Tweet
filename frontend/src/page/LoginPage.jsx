import {Pagecontainer, InputBoxConatiner, AuthButton, AuthLink } from '../components/common/auth.style'
import { AuthInput } from '../components/AuthInput'
import { AClogo } from '../assets/image/AC-logo'
import './FormLikePage.css'
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { UserLoginRequest } from '../../../backend/api/alphatwitter'

export const LoginPage = () =>{
  const navigate = useNavigate()
  const [userTypeUserName , setUserTypeUserName ] = useState('')
  const [userTypePW, setUserTypePW] = useState('')

  useEffect(()=>{
    const token = localStorage.getItem("token")
      if(!token){
        navigate("/login")
        console.log("without token")
      } else {
        navigate("/")
        console.log("with token")
      }
  },[navigate])
  

  function handleBackendLoginClick(){
      navigate('/BackendLogin')
    }
  
  function handleRegisterClick(){
      navigate('/register')
    }

  async function handleLoginSubmit(event){
    event.preventDefault()
    //透過api 打login post request
    try {
      const res = await UserLoginRequest(userTypeUserName,userTypePW)
      const submitResult = res.data.data
      console.log(submitResult)
      //依照結果轉導
      if ( submitResult === "passed"){
        //存token
        const token = res.data.token
        localStorage.setItem("token",token)
        //轉導
        navigate("/")
      } else if ( submitResult === "failed"){
        navigate("/Login")
      }
    }
    catch(error){
      console.error(error)
    }
  }

  

  return (
    <Pagecontainer>
      <AClogo />
      <h1>登入 AlphaTwitter</h1>
      <InputBoxConatiner>
        <AuthInput displayName={"帳號"} type={"text"} name={"userTypeName"} id={"userTypeName"} onChange={(event)=>setUserTypeUserName(event.target.value)}/>
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput displayName={"密碼"} type={"password"} name={"userTypePW"} id={"userTypePW"} onChange={(event)=>setUserTypePW(event.target.value)}/>
      </InputBoxConatiner>
      <AuthButton onClick={handleLoginSubmit}>登入</AuthButton>
      <div className='loginButtonLink'>
      <AuthLink onClick={handleRegisterClick}>註冊Alphatwitter</AuthLink>
      <AuthLink onClick={handleBackendLoginClick}>後台登入</AuthLink>
      </div>
    </Pagecontainer>
  )
}