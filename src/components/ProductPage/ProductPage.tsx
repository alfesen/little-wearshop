import s from './ProductPage.module.scss'
import { useState, Fragment, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from '../../types/Types'
import { exchange } from '../../helpers/exchange'
import { cartActions } from '../../store/cart-slice'
import GoBackButton from '../UI/GoBackButton/GoBackButton'
import NotFound from '../UI/NotFound/NotFound'

type Params = {
  id: string
}

const ProductPage = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const { id } = useParams<Params>()

  const state = {
    products: useSelector((state: State) => state.products.products),
    rates: useSelector((state: State) => state.currencies.rates),
    currency: useSelector((state: State) => state.currencies.currencySymbol),
  }

  const { products, rates, currency } = state

  const amountRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const prod = products.find(product => product.id === id)
  if (!prod) return <NotFound />

  const { id: prodId, price, images, description, name } = prod!

  const priceInExchange = exchange(currency, price, rates)

  const prodImages = images.map((image: string, index: number) => {
    return (
      <div
        key={`${prodId}_${index}`}
        className={`${s.product__gallery_sidebar_image} ${
          imageIndex === index ? s.selected : ''
        }`}
        onClick={() => {
          setImageIndex(index)
          console.log(index === imageIndex)
        }}>
        <img src={image} alt={`${name}_image`} />
      </div>
    )
  })

  const addProductToCart = () => {
    let amount = 1
    if (amountRef.current != null && amountRef.current.value !== '') {
      amount = parseInt(amountRef.current.value)
    }
    const product = {
      id: prodId,
      name: name,
      amount: amount,
      price: price * amount,
    }

    dispatch(cartActions.addProductToCart(product))
  }

  return (
    <Fragment>
      <GoBackButton />

      <section className={s.product}>
        <div className={s.product__gallery}>
          <div className={s.product__gallery_sidebar}>{prodImages}</div>
          <div className={s.product__image}>
            <img
              src={prod?.images[imageIndex]}
              alt={`${prod?.name}_current_image`}
            />
          </div>
        </div>
        <div className={s.product__description}>
          <div className={s.product__description_header}>
            <h2>{name}</h2>
            <h2>
              {currency}&nbsp;
              {priceInExchange}
            </h2>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div className={s.product__tooltip}>
            <div>
              <label htmlFor='amount'>Amount:</label>&nbsp;
              <input
                ref={amountRef}
                min={1}
                max={10}
                type='number'
                placeholder='1'
                id='amount'
                className={s.amount__input}></input>
            </div>
            <button className={s.cart__button} onClick={addProductToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ProductPage
