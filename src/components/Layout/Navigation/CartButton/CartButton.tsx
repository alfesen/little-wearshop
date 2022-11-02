import icon from '../../../../assets/icons/icon.svg'
import s from './CartButton.module.scss'

const CartButton = () => {
  return (
    <button className={s.cart__button}>
      <img src={icon} alt='cart-icon.svg' />
    </button>
  )
}

export default CartButton
