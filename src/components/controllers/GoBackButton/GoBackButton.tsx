import { Link } from 'react-router-dom'

import s from './GoBackButton.module.scss'

const GoBackButton = () => {
  return (
    <Link to='..' relative='path' className={s.go__back}>
      « To previous page
    </Link>
  )
}

export default GoBackButton
