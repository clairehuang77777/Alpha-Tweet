import {Pagecontainer, InputBoxConatiner, AuthButton, AuthLink } from '../components/common/auth.style'
import { AuthInput } from '../components/AuthInput'
import { AClogo } from '../assets/image/AC-logo'
import './FormLikePage.css'
import { useNavigate } from "react-router-dom"

export const LoginPage = () =>{
  const navigate = useNavigate()

  function handleBackendLoginClick(){
      navigate('/BackendLogin')
    }
  
  function handleRegisterClick(){
      navigate('/register')
    }

  

  return (
    <Pagecontainer>
      <AClogo />
      <h1>登入 Alphitter</h1>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <AuthButton>登入</AuthButton>
      <div className='loginButtonLink'>
      <AuthLink onClick={handleRegisterClick}>註冊Alphitter</AuthLink>
      <AuthLink onClick={handleBackendLoginClick}>後台登入</AuthLink>
      </div>
    </Pagecontainer>
  )
}