import { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { cartActions } from '../../../store/cart-slice'
import { CartItem as CartItemType, State } from '../../../types/Types'
import { exchange } from '../../../helpers/exchange'

import BasicButton from '../../controllers/BasicButton/BasicButton'

import s from './CartItem.module.scss'

const CartItem = (props: CartItemType) => {
  const [showDescription, setShowDescription] = useState(false)
  const { id, name, amount, price, image, description } = props

  const state = {
    currency: useSelector((state: State) => state.currencies.currencySymbol),
    rates: useSelector((state: State) => state.currencies.rates),
  }

  const { currency, rates } = state

  const dispatch = useDispatch()
  const priceInExchange = exchange(currency, price, rates)

  const showDescriptionHandler = () => {
    setShowDescription(!showDescription)
  }

  return (
    <Fragment>
      <div id={id} className={s.item}>
        <div className={s.header}>
          {image && (
            <img
              src={image}
              alt={`${name}__image`}
              className={s.header__image}
            />
          )}
          <div className={s.header__controls}>
            <Link
              className={s.item__link}
              to={`/product/${id}`}
              onClick={() => dispatch(cartActions.closeCart())}>
              {name}
            </Link>

            {description && (
              <BasicButton onClick={showDescriptionHandler}>
                See description
              </BasicButton>
            )}
          </div>
        </div>
        <div className={`${s.item__details} ${description ? s.checkout : ''}`}>
          <div className={s.item__details_amount}>
            <span>Amount:</span>{' '}
            <div className={s.item__details_amount_controls}>
              <button onClick={props.onAdd}>+</button>
              <span>{amount}</span>
              <button onClick={props.onRemove}>-</button>
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
      {showDescription && (
        <div className={s.item__description}>{description}</div>
      )}
    </Fragment>
  )
}

export default CartItem
