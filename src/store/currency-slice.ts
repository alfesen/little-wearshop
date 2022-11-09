import { createSlice } from '@reduxjs/toolkit'
import { CurrencyState } from '../types/Types'

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    curs: [],
    show: false
  } as CurrencyState,
  reducers: {
    setCurrencies(state, action) {
      const currencies = action.payload
      state.curs = currencies
    },
    toggleCurrencySelect(state) {
      state.show = !state.show
    }
  },
})

export const currencyActions = currencySlice.actions

export default currencySlice
