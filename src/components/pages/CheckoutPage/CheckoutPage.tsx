import { Fragment } from 'react'
import s from './CheckoutPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../../models/CartItem/CartItem'
import { cartActions } from '../../../store/cart-slice'
import { State } from '../../../types/Types'
import { exchange } from '../../../helpers/exchange'
import Heading from '../../models/Heading/Heading'
import GoBackButton from '../../controllers/GoBackButton/GoBackButton'
import OrderForm from '../../controllers/OrderForm/OrderForm'

const Checkout = () => {
  const state = {
    items: useSelector((state: State) => state.cart.cartItems),
    totalAmount: useSelector((state: State) => state.cart.totalAmount),
    currency: useSelector((state: State) => state.currencies.currencySymbol),
    rates: useSelector((state: State) => state.currencies.rates),
    products: useSelector((state: State) => state.products.products),
  }

  const dispatch = useDispatch()

  const { items, totalAmount, currency, rates, products } = state

  const totalExchange = exchange(currency, totalAmount, rates)

  const cartItems = items.map(item => {
    const product = products.find(p => p.id === item.id)
    const addToCart = () => {
      dispatch(cartActions.addOne(product))
    }
    const removeFromCart = () => {
      dispatch(cartActions.removeOne(product))
    }

    return (
      <CartItem
        key={`${item.id}_cart-item-key`}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        image={item.image}
        description={item.description}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
    )
  })

  return (
    <section className={s.checkout}>
      <Heading heading='Checkout' />
      {items.length > 0 ? (
        <Fragment>
          {cartItems}

          <div className={s.checkout__total}>
            <h3>
              Total:{' '}
              <span>
                {currency}&nbsp;{totalExchange}
              </span>
            </h3>
          </div>
          <OrderForm
            items={items}
            totalAmount={totalExchange}
            currencySymbol={currency}
          />
        </Fragment>
      ) : (
        <div className={s.checkout__empty}>
          <h3>Nothing to see here</h3>
          <GoBackButton />
        </div>
      )}
    </section>
  )
}

export default Checkout
