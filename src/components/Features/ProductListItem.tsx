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
  const currency = useSelector((state: State) => state.products.currency)

  return (
    <div id={props.id} className={s.product}>
      <div className={s.product__image}>
        <div className={s['product__description--overlay']}>
          <p>{props.description}</p>
        </div>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={s.product__description}>
        <CartButton className={s.product__button} />
        <h4>{props.name}</h4>
        <span>
          {currency} {props.price}
        </span>
      </div>
    </div>
  )
}

export default ProductListItem
