import { AClogo } from '../../../assets/image/AC-logo'
import { LeftSectionButton } from './LeftSectionButton'
import './LeftSection.scss'
import { images } from "../../../assets/images"



export const LeftSection = () => {
  return (
      <>
      <div className="left-section-container">
        <div className="left-section-flex-start">
          <div className="left-section-flex-start-logo">
          <AClogo />
          </div>
          <LeftSectionButton src={images.home} srcClick={images.home_click} title="首頁" id={4}/>
          <LeftSectionButton src={images.profile} srcClick={images.profile_click} title="個人資料" id={5}/>
          <LeftSectionButton src={images.setting} srcClick={images.setting_click} title="設定" id={3}/>
          {/* <button type="button" className='LeftSection-Tweet-Btn'>推文</button> */}
        </div>
        <div className="left-section-flex-center"></div>
        <div className="left-section-flex-end">
          <LeftSectionButton src={images.logout} srcClick={images.logout_click} title="登出" id={7}/>
        </div>
      </div>
    </>
  )
} 