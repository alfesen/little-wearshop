import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import s from './Overlay.module.scss'

type Props = {
  onClose: () => void
}

const Backdrop = (props: Props) => {
  return <div className={s.backdrop} onClick={props.onClose}></div>
}

const Overlay = (props: Props) => {
  const hook = document.getElementById('overlay') as HTMLElement
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, hook)}
    </Fragment>
  )
}

export default Overlay
