import CartButton from '../UI/CartButton/CartButton'
import s from './CartDropdown.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
import { currencyActions } from '../../store/currency-slice'
import { State } from '../../types/Types'

const CartDropdown = () => {
  const show = useSelector((state: State) => state.cart.show)
  const currencySelect = useSelector((state: State) => state.currencies.show)

  const dispatch = useDispatch()

  const toggleCart = () => {
    show ? dispatch(cartActions.closeCart()) : dispatch(cartActions.openCart())
    currencySelect && dispatch(currencyActions.closeSelect())
  }

  return (
    <div className={s.cart}>
      <CartButton onClick={toggleCart} />

      {show && (
        <div className={s.cart__dropdown}>
          <div className={s.cart__item}>
            <h4>name</h4>
            <div>
              <p>
                amount: <span>2</span>
              </p>
              <p>
                Price: <span>$ 96</span>
              </p>
            </div>
          </div>
          <div className={s.cart__item}>
            <h4>name</h4>
            <div>
              <p>
                amount: <span>2</span>
              </p>
              <p>
                Price: <span>$ 96</span>
              </p>
            </div>
          </div>
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
