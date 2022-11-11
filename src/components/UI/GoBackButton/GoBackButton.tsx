import s from './GoBackButton.module.scss'
import { useHistory } from 'react-router-dom'

const GoBackButton = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <button onClick={goBack} className={s.go__back}>
      « To previous page
    </button>
  )
}

export default GoBackButton
