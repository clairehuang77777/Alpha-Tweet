export const AuthInput = ({displayName, type, idName, onChange, inputName}) =>{
  return (
    <div className="inputbox">
     <label htmlFor="account"></label>
     <input type={type} name={inputName} id={idName} onChange={onChange} placeholder={displayName}required/>
    </div>
  )
}