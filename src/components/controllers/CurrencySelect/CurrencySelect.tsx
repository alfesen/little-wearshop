import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State } from '../../../types/Types'
import { currencyActions } from '../../../store/currency-slice'
import { cartActions } from '../../../store/cart-slice'

import s from './CurrencySelect.module.scss'

const CurrencySelect = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')

  const state = {
    currencies: useSelector((state: State) => state.currencies.curs),
    showCurrencySelect: useSelector((state: State) => state.currencies.show),
    showCart: useSelector((state: State) => state.cart.show),
  }

  const { currencies, showCurrencySelect, showCart } = state

  const dispatch = useDispatch()

  const toggleSelect = () => {
    showCurrencySelect
      ? dispatch(currencyActions.closeSelect())
      : dispatch(currencyActions.openSelect())
    showCart && dispatch(cartActions.closeCart())
  }

  const handleSelectCurrency = (event: any) => {
    setSelectedCurrency(event.target.textContent)
    toggleSelect()
    dispatch(currencyActions.changeCurrency(event.target.textContent))
  }

  const options = currencies.map(c => (
    <li value={c} key={`${c}_option_key`} onClick={handleSelectCurrency}>
      {c}
    </li>
  ))

  return (
    <div className={s.currency}>
      <button onClick={toggleSelect} className={s.currency__button}>
        {selectedCurrency}
      </button>
      {showCurrencySelect && (
        <ul className={s.currency__dropdown}>{options}</ul>
      )}
    </div>
  )
}

export default CurrencySelect
