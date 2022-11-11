import CartButton from '../UI/CartButton/CartButton'
import s from './CartDropdown.module.scss'

const CartDropdown = () => {
  return (
    <div className={s.cart} >
    <CartButton />
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
    </div>
  )
}

export default CartDropdown
