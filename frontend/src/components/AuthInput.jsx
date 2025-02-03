export const AuthInput = ({displayName, type, idName, onChange, inputName}) =>{
  return (
    <div className="inputbox">
     <label htmlFor="account">{displayName}</label>
     <input type={type} name={inputName} id={idName} onChange={onChange} required/>
    </div>
  )
}