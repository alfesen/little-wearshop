import { useNavigate } from 'react-router-dom'

import s from './GoBackButton.module.scss'

const GoBackButton = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(-1)} className={s.go__back}>
      « To previous page
    </button>
  )
}

export default GoBackButton
