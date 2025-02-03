import {Pagecontainer, InputBoxConatiner, AuthButton, AuthLink } from '../components/common/auth.style'
import { AuthInput } from '../components/AuthInput'
import { AClogo } from '../assets/image/AC-logo'
import './FormLikePage.css'
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import { saveUserAccount } from '../../../backend/api/alphatwitter'

export const RegisterPage = () =>{
  const navigate = useNavigate()
  //存帳號--輸入值
  const [Account, setAccount] = useState("")
  //存名稱--輸入值
  const [UserName, setUserName] = useState("")
  //存Email--輸入值
  const [userTypeEmail, setUserTypeEmail] = useState("")
  //存密碼--輸入值
  const [userTypePassword, setUserTypePassword] = useState("")
  //存密碼確認--輸入值
  const [userTypeDoublePassword, setUserTypeDoublePassword] = useState("")


function handleLoginClick(){
      navigate('/Login')
    }

async function handleSignUpVerify(event){
  console.log(Account,UserName,userTypeEmail,userTypePassword,userTypeDoublePassword)
  //取消預設透過<action 發出post request>
  event.preventDefault()

    //若無,跳出紅色error msg
    const ErrorMsg = document.querySelector("#errormsg")

    //檢查密碼跟確認密碼是否相同
    if(userTypePassword != userTypeDoublePassword){
      console.error("再次確認密碼不正確")
      ErrorMsg.innerHTML = "密碼不相符, 請再次輸入確認密碼"
      }
      
    //透過api發送post請求
      try {
        const res = await saveUserAccount(Account,UserName,userTypeEmail,userTypePassword,userTypeDoublePassword )
        //res傳回token,存在local storage
        const token = res.data.token
        localStorage.setItem("token",token)
        //轉導到"Main page"
        navigate("/")
      }
      catch(error){
        console.error(error)
      }
  }

  
  return (
    <Pagecontainer>
      <AClogo />
      <h1>建立你的帳號</h1>
      <form action="http://localhost:3000/api/register" method="post">
      <InputBoxConatiner>
        <AuthInput displayName={"帳號"} type={"text"} idName={"Account"} inputName={"Account"} onChange={(event)=>setAccount(event.target.value)}/>
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput displayName={"名稱"} type={"text"} idName={"UserName"} inputName={"UserName"} onChange={(event)=>setUserName(event.target.value)}/>
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput displayName={"Email"} type={"email"} idName={"Email"} onChange={(event)=>setUserTypeEmail(event.target.value)} inputName={"Email"}/>
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput displayName={"密碼"} type={"password"} idName={"Password"} onChange={(event)=>setUserTypePassword(event.target.value)} inputName={"Password"}/>
      </InputBoxConatiner>
      <InputBoxConatiner>
        <AuthInput displayName={"密碼確認"} type={"password"} idName={"DoubleCheckPassWord"} onChange={(event)=>setUserTypeDoublePassword(event.target.value)} inputName={"DoubleCheckPassWord"}/>
      </InputBoxConatiner>
      <h6 id="errormsg"></h6>
      <AuthButton type="submit" onClick={(event)=>handleSignUpVerify(event)}>註冊</AuthButton>
      </form>
      <AuthLink onClick={handleLoginClick}>取消</AuthLink>
      
    </Pagecontainer>
  )
}