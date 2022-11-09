import  {useState} from 'react'
import s from './CurrencySelect.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {State} from '../../../types/Types'
import {currencyActions} from '../../../store/currency-slice'

const CurrencySelect = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const currencies = useSelector((state: State) => state.currencies.curs)
  const showCurrencySelect = useSelector((state: State) => state.currencies.show)

  const dispatch = useDispatch()

  const currencyAbbreviations: string[] = []

  for (const currency in currencies) {
    currencyAbbreviations.push(currency)
  }

  const toggleSelect = () => {
    dispatch(currencyActions.toggleCurrencySelect())
  }

  const handleSelectCurrency = (event: any) => {
    setSelectedCurrency(event.target.textContent)
    toggleSelect()
  }

  const options = currencyAbbreviations.map(c => <li  value={c}  key={`${c}_option_key`} onClick={handleSelectCurrency}>{c}</li>)

  return <div className={s.currency}>
    <button onClick={toggleSelect} className={s.currency__button}>{selectedCurrency}</button>
    {showCurrencySelect && <ul className={s.currency__dropdown}>{options}</ul>}
  </div>
}

export default CurrencySelect