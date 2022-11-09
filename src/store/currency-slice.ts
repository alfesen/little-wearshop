import { createSlice } from '@reduxjs/toolkit'
import { CurrencyState } from '../types/Types'

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    curs: {},
  } as CurrencyState,
  reducers: {
    setCurrencies(state, action) {
      const currencies = action.payload
      state.curs = currencies
    },
  },
})

export const currencyActions = currencySlice.actions

export default currencySlice
