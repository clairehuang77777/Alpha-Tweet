import { Children } from 'react'
import { OnlyOneUser } from './onlyOne/OnlyOneUser'

export const RightSectionOnlyOneUserDisplay = () => {
  return (
    <div className="rightSection">
      <div className="rightSection-center-onlyone">
        <OnlyOneUser/>
      </div>
    </div>
  )
}