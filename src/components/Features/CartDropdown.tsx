import CartButton from '../UI/CartButton/CartButton'
import s from './CartDropdown.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../../store/cart-slice'
import { backdropActions } from '../../store/backdrop-slice'
import { currencyActions } from '../../store/currency-slice'
import Overlay from '../UI/Overlay/Overlay'
import { State, CartItem as CartItemType } from '../../types/Types'
import CartItem from './CartItem'
import { exchange } from '../../helpers/exchange'
import BasicButton from '../UI/BasicButton/BasicButton'

const CartDropdown = () => {

  const state = {
    curBackdrop: useSelector((state: State) => state.currencies.show),
    currency: useSelector((state: State) => state.currencies.currencySymbol),
    rates: useSelector((state: State) => state.currencies.rates),
    showCart: useSelector((state: State) => state.cart.show),
    cartItems: useSelector((state: State) => state.cart.cartItems),
    totalAmount: useSelector((state: State) => state.cart.totalAmount),
    products: useSelector((state: State) => state.products.products),
  }

  const {
    curBackdrop,
    showCart,
    cartItems,
    totalAmount,
    currency,
    rates,
    products,
  } = state

  const dispatch = useDispatch()

  const totalAmountInExchange = exchange(currency, totalAmount, rates)

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
        const product = products.find(p => p.id === item.id)
        const addToCart = () => {
          dispatch(cartActions.addOne(product))
        }
        const removeFromCart = () => {
          dispatch(cartActions.removeOne(product))
        }
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={addToCart}
            onRemove={removeFromCart}
          />
        )
      })
    ) : (
      <div className={s.cart__empty}>Cart is Empty</div>
    )

  return (
    <div className={s.cart}>
      {(state.curBackdrop || showCart) && <Overlay onClose={closeBackdrop} />}
      <CartButton onClick={toggleCart} />

      {showCart && (
        <div className={s.cart__dropdown}>
          {renderCartItems}
          <div className={s.cart__actions}>
            {cartItems.length > 0 && <Link to='/checkout'>
              <BasicButton>Checkout</BasicButton>
            </Link>}
           <BasicButton
              onClick={closeBackdrop}
              className={s.cart__actions_close}>
              Close
            </BasicButton>
          </div>
          <div className={s.cart__total}>
            <h2>
              TotalAmount: {currency}&nbsp;{totalAmountInExchange}
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartDropdown
