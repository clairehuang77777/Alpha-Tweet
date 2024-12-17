import './Display.css'
import { PopUpBackground } from './right/popup/PopupBackground'
import { PopUpTweet } from './right/popup/PopUpTweet'
import { popUpContext } from './popUpContext'
import { useContext } from 'react'
import { PopUpEditMode } from './right/popup/PopUpEditMode'

export const Display = ({left, right}) =>{
  const {popUp} = useContext(popUpContext)
  const {editMode} = useContext(popUpContext)
  
  if (popUp){
    return (
    <>
      <PopUpTweet/>
      <PopUpBackground>
        <div className="layout">
          <div className="left-section">
            {left}
          </div>
          <div className="right-section">
            {right}
          </div>
        </div>
      </PopUpBackground>
    </> 
  )} else if (editMode){
    return (
    <>
      <PopUpEditMode/>
      <PopUpBackground>
       <div className="layout">
          <div className="left-section">
            {left}
          </div>
          <div className="right-section">
            {right}
          </div>
        </div>
      </PopUpBackground>
    </>
    )
  } else {
    return (
    <>
      <div className="layout">
      <div className="left-section">
        {left}
      </div>
      <div className="right-section">
        {right}
      </div>
    </div>
    </> 
  )
  }
}


