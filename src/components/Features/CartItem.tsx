import s from './CartItem.module.scss'
import { CartItem as CartItemType } from '../../types/Types'

const CartItem = (props: CartItemType) => {
  return (
    <div className={s.item}>
      <h4>{props.name}</h4>
      <div>
        <p>
          Amount: <span>{props.amount}</span>
        </p>
        <p>
          Price: <span>$ {props.price}</span>
        </p>
      </div>
    </div>
  )
}

export default CartItem
