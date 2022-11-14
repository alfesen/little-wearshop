import s from './CartItem.module.scss'
import { CartItem as CartItemType, State } from '../../types/Types'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
import BasicButton from '../UI/BasicButton/BasicButton'

import { exchange } from '../../helpers/exchange'

const CartItem = (props: CartItemType) => {
  const { id, name, amount, price } = props

  const state = {
    currency: useSelector((state: State) => state.currencies.currencySymbol),
    rates: useSelector((state: State) => state.currencies.rates),
  }

  const { currency, rates } = state

  const dispatch = useDispatch()

  const priceInExchange = exchange(currency, price, rates)

  return (
    <div id={id} className={s.item}>
      <Link
        className={s.item__link}
        to={`/product/${id}`}
        onClick={() => dispatch(cartActions.closeCart())}>
        {name}
      </Link>
      <div className={s.item__description}>
        <div className={s.item__description_amount}>
          <span>Amount:</span>{' '}
          <div className={s.item__description_amount_controls}>
            <button onClick={() => dispatch(cartActions.addOne(id))}>+</button>
            <span>{amount}</span>
            <button onClick={() => dispatch(cartActions.removeOne(id))}>
              -
            </button>
          </div>
        </div>
        <p>
          Price:{' '}
          <span>
            {currency}&nbsp;{priceInExchange}
          </span>
        </p>
        <BasicButton
          onClick={() => dispatch(cartActions.removeProductFromCart(id))}
          className={s.remove}>
          Remove
        </BasicButton>
      </div>
    </div>
  )
}

export default CartItem
