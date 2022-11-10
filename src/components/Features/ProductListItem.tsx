import s from './ProductListItem.module.scss'
import CartButton from '../UI/CartButton/CartButton'
import { State } from '../../types/Types'
import { useSelector } from 'react-redux'

export type Props = {
  id: string
  name: string
  description?: string
  price: number
  image: string
}

const ProductListItem = (props: Props) => {
  const currency = useSelector(
    (state: State) => state.currencies.currencySymbol
  )
  const rates = useSelector((state: State) => state.currencies.rates)

  const { id, name, description, price, image } = props

  let priceInExchange: string

  switch (currency) {
    case '$':
      priceInExchange = price.toFixed(2)
      break
    case 'Є':
      priceInExchange = (price * rates.EUR).toFixed(2)
      break
    case '£':
      priceInExchange = (price * rates.GBP).toFixed(2)
      break
    case '¥':
      priceInExchange = (price * rates.JPY).toFixed(2)
      break
    case '₽':
      priceInExchange = (price * rates.RUB).toFixed(2)
      break
    default:
      priceInExchange = price.toFixed(2)
  }

  return (
    <div id={id} className={s.product}>
      <div className={s.product__image}>
        <div className={s['product__description--overlay']}>
          <p>{description}</p>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className={s.product__description}>
        <CartButton className={s.product__button} />
        <h4>{name}</h4>
        <span>
          {currency} {priceInExchange}
        </span>
      </div>
    </div>
  )
}

export default ProductListItem
