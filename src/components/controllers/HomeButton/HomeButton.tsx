import homeIcon from '../../../assets/icons/home-location-icon.svg'
import { Link } from 'react-router-dom'

import s from './HomeButton.module.scss'

const HomeButton = () => {
  return (
    <Link className={s.home__button} to='/home'>
      <img src={homeIcon} alt='home button' />
    </Link>
  )
}

export default HomeButton
