import icon from '../../../assets/icons/icon.svg'
import s from './CartButton.module.scss'

type Props = {
  className?: string,
  onClick?: () => void
}

const CartButton = (props: Props) => {

  const {onClick, className} = props

  return (
    <button onClick={onClick} className={`${s.cart__button} ${className}`}>
      <img src={icon} alt='cart-icon.svg' />
    </button>
  )
}

export default CartButton
