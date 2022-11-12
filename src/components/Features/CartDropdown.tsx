import CartButton from '../UI/CartButton/CartButton'
import s from './CartDropdown.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
import { backdropActions } from '../../store/backdrop-slice'
import { currencyActions } from '../../store/currency-slice'
import Overlay from '../UI/Overlay/Overlay'
import { State, CartItem as CartItemType } from '../../types/Types'
import CartItem from './CartItem'

const CartDropdown = () => {
  const state = {
    curBackdrop: useSelector((state: State) => state.currencies.show),
    showCart: useSelector((state: State) => state.cart.show),
    cartItems: useSelector((state: State) => state.cart.cartItems),
  }

  const { curBackdrop, showCart, cartItems } = state

  const dispatch = useDispatch()

  const toggleCart = () => {
    showCart
      ? dispatch(cartActions.closeCart())
      : dispatch(cartActions.openCart())
    curBackdrop && dispatch(currencyActions.closeSelect())
  }

  const closeBackdrop = () => {
    dispatch(backdropActions.closeBackdrop())
    dispatch(cartActions.closeCart())
    dispatch(currencyActions.closeSelect())
  }

  const renderCartItems =
    cartItems && cartItems.length > 0 ? (
      cartItems.map((item: CartItemType) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        )
      })
    ) : (
      <div>Cart is Empty</div>
    )

  return (
    <div className={s.cart}>
      {(state.curBackdrop || showCart) && <Overlay onClose={closeBackdrop} />}
      <CartButton onClick={toggleCart} />

      {showCart && (
        <div className={s.cart__dropdown}>
          {renderCartItems}
          <div className={s.cart__actions}>
            <button>To cart</button>
            <button onClick={closeBackdrop}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartDropdown
