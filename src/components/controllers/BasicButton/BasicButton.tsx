import s from './BasicButton.module.scss'

type Props = {
  className?: string
  onClick?: () => void
  type?: 'submit'
  children: string
}

const BasicButton = (props: Props) => {
  const { className, onClick, type, children } = props

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${s.button}`}>
      {children}
    </button>
  )
}

export default BasicButton
