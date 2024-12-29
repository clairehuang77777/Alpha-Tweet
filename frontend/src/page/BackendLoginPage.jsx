import {Pagecontainer, InputBoxConatiner, AuthButton, AuthLink } from '../components/common/auth.style'
import { AuthInput } from '../components/AuthInput'
import { AClogo } from '../assets/image/AC-logo'
import './FormLikePage.css'
import { useNavigate } from "react-router-dom"

export const BackendLoginPage = () =>{
  const navigate = useNavigate()

  function handleFrontEndLoginClick(){
      navigate('/Login')
    }
  return (
    <Pagecontainer>
      <AClogo />
      <h1>後台登入</h1>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput />
      </InputBoxConatiner>
      <AuthButton>登入</AuthButton>
      <AuthLink onClick={handleFrontEndLoginClick}>前台登入</AuthLink>
    </Pagecontainer>
  )
}