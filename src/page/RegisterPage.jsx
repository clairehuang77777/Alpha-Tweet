import {Pagecontainer, InputBoxConatiner, AuthButton, AuthLink } from '../components/common/auth.style'
import { AuthInput } from '../components/AuthInput'
import { AClogo } from '../assets/image/AC-logo'
import './FormLikePage.css'
import { useNavigate } from "react-router-dom"

export const RegisterPage = () =>{
  const navigate = useNavigate()

  function handleLoginClick(){
      navigate('/Login')
    }

  return (
    <Pagecontainer>
      <AClogo />
      <h1>建立你的帳號</h1>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <AuthButton>註冊</AuthButton>
      <AuthLink onClick={handleLoginClick}>取消</AuthLink>
    </Pagecontainer>
  )
}