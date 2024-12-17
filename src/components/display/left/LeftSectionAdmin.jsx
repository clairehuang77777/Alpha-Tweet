import { AClogo } from '../../../assets/image/AC-logo'
import { LeftSectionButton } from './LeftSectionButton'
import './LeftSection.scss'


export const LeftSectionAdmin = () => {
  return (
      <>
      <div className="left-section-container">
        <div className="left-section-flex-start">
          <div className="left-section-flex-start-logo">
          <AClogo />
          </div>
          <LeftSectionButton src="/home.png" srcClick="/home_click.png" title="推文清單" id={1}/>
          <LeftSectionButton src="/profile.png" srcClick="/profile_click.png" title="使用者列表" id={2}/>

        </div>
        <div className="left-section-flex-center"></div>
        <div className="left-section-flex-end">
          <LeftSectionButton src="/logout.png" srcClick="/logout-click.png" title="登出" id={3}/>
        </div>
      </div>
    </>
  )
} 