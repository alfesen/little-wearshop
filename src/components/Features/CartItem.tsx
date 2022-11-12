import s from './CartItem.module.scss'
import { CartItem as CartItemType } from '../../types/Types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const CartItem = (props: CartItemType) => {
  const { id, name, amount, price } = props

  const dispatch = useDispatch()

  return (
    <div id={id} className={s.item}>
      <Link
        to={`/product/${id}`}
        onClick={() => dispatch(cartActions.closeCart())}>
        {name}
      </Link>
      <div>
        <p>
          Amount: <span>{amount}</span>
        </p>
        <p>
          Price: <span>$ {price}</span>
        </p>
      </div>
    </div>
  )
}

export default CartItem
