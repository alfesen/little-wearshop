import { createSlice } from '@reduxjs/toolkit'
import { CurrencyState } from '../types/Types'

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    curs: [],
    rates: {},
    show: false,
    currencySymbol: '$',
  } as CurrencyState,
  reducers: {
    setCurrencies(state, action) {
      const payload = action.payload
      state.rates = payload.rates
      state.curs = payload.currencies
    },
    toggleCurrencySelect(state) {
      state.show = !state.show
    },
  },
})

export const currencyActions = currencySlice.actions

export default currencySlice
