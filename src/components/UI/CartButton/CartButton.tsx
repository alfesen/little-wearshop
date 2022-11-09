import icon from '../../../assets/icons/icon.svg'
import s from './CartButton.module.scss'

type Props = {
  className?: string
}

const CartButton = (props: Props) => {
  return (
    <button className={`${s.cart__button} ${props.className}`}>
      <img src={icon} alt='cart-icon.svg' />
    </button>
  )
}

export default CartButton
