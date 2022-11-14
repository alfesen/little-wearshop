import s from './ProductListItem.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../types/Types'
import { exchange } from '../../helpers/exchange'
import CartButton from '../UI/CartButton/CartButton'

export type Props = {
  id: string
  name: string
  description?: string
  price: number
  image: string
  onAdd: (id: string) => void
}

const ProductListItem = (props: Props) => {
  const currency = useSelector(
    (state: State) => state.currencies.currencySymbol
  )
  const rates = useSelector((state: State) => state.currencies.rates)

  const { id, name, description, price, image } = props

  const priceInExchange = exchange(currency, price, rates)

  return (
    <div id={id} className={s.product}>
      <div className={s.product__image}>
        <div className={s['product__description--overlay']}>
          <p>{description}</p>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className={s.product__description}>
        <CartButton onClick={() => props.onAdd(id)} className={s.product__button} />
        <Link to={`/product/${id}`}>{name}</Link>
        <span>
          {currency} {priceInExchange}
        </span>
      </div>
    </div>
  )
}

export default ProductListItem
