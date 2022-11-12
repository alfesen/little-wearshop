import s from './BasicButton.module.scss'
type Props = {
  className?: string
  onClick: () => void
  children: string
}

const BasicButton = (props: Props) => {
  return (
    <button onClick={props.onClick} className={`${props.className} ${s.button}`}>
      {props.children}
    </button>
  )
}

export default BasicButton
