import { AClogo } from '../../../assets/image/AC-logo'
import { LeftSectionButton } from './LeftSectionButton'
import './LeftSection.scss'
import { images } from "../../../assets/images"

export const LeftSectionAdmin = () => {
  return (
      <>
      <div className="left-section-container">
        <div className="left-section-flex-start">
          <div className="left-section-flex-start-logo">
          <AClogo />
          </div>
          <LeftSectionButton src={images.home} srcClick={images.home_click} title="推文清單" id={1}/>
          <LeftSectionButton src={images.profile} srcClick={images.profile_click} title="使用者列表" id={2}/>

        </div>
        <div className="left-section-flex-center"></div>
        <div className="left-section-flex-end">
          <LeftSectionButton src={images.logout} srcClick={images.logout_click} title="登出" id={3}/>
        </div>
      </div>
    </>
  )
} 