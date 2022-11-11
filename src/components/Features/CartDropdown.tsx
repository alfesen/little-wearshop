import CartButton from '../UI/CartButton/CartButton'
import s from './CartDropdown.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
import { backdropActions } from '../../store/backdrop-slice'
import { currencyActions } from '../../store/currency-slice'
import Overlay from '../UI/Overlay/Overlay'
import { State } from '../../types/Types'
import CartItem from './CartItem'

const CartDropdown = () => {
  
  const currencyBackdrop = useSelector((state: State) => state.currencies.show)
  const cartBackdrop = useSelector((state: State) => state.cart.show)
  const show = useSelector((state: State) => state.cart.show)
  const currencySelect = useSelector((state: State) => state.currencies.show)

  const dispatch = useDispatch()

  const toggleCart = () => {
    show ? dispatch(cartActions.closeCart()) : dispatch(cartActions.openCart())
    currencySelect && dispatch(currencyActions.closeSelect())
  }

  
  const closeBackdrop = () => {
    dispatch(backdropActions.closeBackdrop())
    dispatch(cartActions.closeCart())
    dispatch(currencyActions.closeSelect())
  }

  return (
    <div className={s.cart}>
      {(currencyBackdrop || cartBackdrop) && <Overlay onClose={closeBackdrop} />}
      <CartButton onClick={toggleCart} />

      {show && (
        <div className={s.cart__dropdown}>
          <CartItem name='name' amount={3} price={38.99} />
          <CartItem name='Jeans' amount={1} price={22.99} />
          <div className={s.cart__actions}>
            <button>To cart</button>
            <button>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartDropdown
