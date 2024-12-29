import { Children } from 'react'
import './RightSection.scss'

export const RightSectionDisplay = ({center, right}) => {
  return (
    <div className="rightSection">
      <div className="rightSection-center">
        {center}
      </div>
      <div className="rightSection-right">
        {right}
      </div>
    </div>

  )
}