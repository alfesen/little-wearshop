import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { Order } from '../../../types/Types'
import { cartActions } from '../../../store/cart-slice'

import BasicButton from '../BasicButton/BasicButton'

import s from './OrderForm.module.scss'

const OrderForm = (props: Order) => {
  const { items, currencySymbol, totalAmount } = props

  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const dispatch = useDispatch()

  const submitHandler = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      firstNameRef.current &&
      lastNameRef.current &&
      addressRef.current &&
      emailRef.current
    ) {
      const firstName = firstNameRef.current.value
      const lastName = lastNameRef.current.value
      const address = addressRef.current.value
      const enteredEmail = emailRef.current.value
      const validEmail = emailRegex.test(enteredEmail)
      if (firstName === '') {
        alert('Please enter first name')
        return
      }
      if (lastName === '') {
        alert('Please enter last name')
        return
      }
      if (address === '') {
        alert('Please enter address')
        return
      }
      if (!validEmail) {
        alert('Please enter valid email')
        return
      }

      const checkoutData = {
        firstName,
        lastName,
        address,
        validEmail,
      }

      const order = {
        orderedItems: items,
        checkoutData,
        toPay: `${currencySymbol} ${totalAmount}`,
      }

      console.log(order)
      alert('Order sent')
      dispatch(cartActions.placeOrder())
    }
  }

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <label htmlFor='first-name'>First Name</label>
      <input
        ref={firstNameRef}
        type='text'
        id='first-name'
        placeholder='First Name'
      />
      <label htmlFor='last-name'>First Name</label>
      <input
        ref={lastNameRef}
        type='text'
        id='last-name'
        placeholder='Last Name'
      />
      <label htmlFor='address'>Address</label>
      <input ref={addressRef} type='text' id='address' placeholder='Address' />
      <label htmlFor='email'>Email</label>
      <input ref={emailRef} type='email' id='email' placeholder='Email' />
      <div className={s.form__control}>
        <BasicButton type='submit'>Send Order</BasicButton>
      </div>
    </form>
  )
}

export default OrderForm
