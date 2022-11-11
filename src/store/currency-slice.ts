import { createSlice } from '@reduxjs/toolkit'
import { CurrencyState } from '../types/Types'

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    curs: [],
    rates: {},
    show: false,
    currencySymbol: '$'
  } as CurrencyState,
  reducers: {
    setCurrencies(state, action) {
      const payload = action.payload
      state.rates = payload.rates
      state.curs = payload.currencies
    },
    openSelect(state) {
      state.show = true
    },
    closeSelect(state) {
      state.show = false
    },
    changeCurrency(state, action) {
      const payload = action.payload
      console.log(payload)
      switch (payload) {
        case 'USD':
          state.currencySymbol = '$'
          break
        case 'EUR':
          state.currencySymbol = 'Є' 
          break
        case 'GBP':
          state.currencySymbol = '£'
          break
        case 'JPY':
          state.currencySymbol = '¥'
          break
        case 'RUB':
          state.currencySymbol = '₽'
          break
        case 'PLN':
          state.currencySymbol = 'Zł'
          break
        default: state.currencySymbol = '$'
      }
    }
  },
})

export const currencyActions = currencySlice.actions

export default currencySlice
