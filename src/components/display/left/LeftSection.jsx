import { AClogo } from '../../../assets/image/AC-logo'
import { LeftSectionButton } from './LeftSectionButton'
import './LeftSection.scss'


export const LeftSection = () => {
  return (
      <>
      <div className="left-section-container">
        <div className="left-section-flex-start">
          <div className="left-section-flex-start-logo">
          <AClogo />
          </div>
          <LeftSectionButton src="/home.png" srcClick="/home_click.png" title="首頁" id={4}/>
          <LeftSectionButton src="/profile.png" srcClick="/profile_click.png" title="個人資料" id={5}/>
          <LeftSectionButton src="/setting.png" srcClick="/setting_click.png" title="設定" id={6}/>
          <button type="button" className='LeftSection-Tweet-Btn'>推文</button>
        </div>
        <div className="left-section-flex-center"></div>
        <div className="left-section-flex-end">
          <LeftSectionButton src="/logout.png" srcClick="/logout-click.png" title="登出" id={7}/>
        </div>
      </div>
    </>
  )
} 