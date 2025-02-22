import styled from "styled-components";

export const Pagecontainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  justify-content: center;
  align-items: center;

  /* 手機版調整 */
  @media (max-width: 480px) {
    width:100vw;
    margin:auto auto;
  }
`
export const InputBoxConatiner =styled.div`
  margin: 10px;
  background-color: #f2f2f2;
`

export const AuthButton = styled.button`
  margin-top: 20px;
  width: 280px;
  border-radius: 25px;
  border-width: 0px;
  background-color: #ff6600;
  color: white;
  padding: 5px;
`

export const AuthLink = styled.a`
  font-size:0.8rem;
  padding: 5px;
  color:lightblue;
`

