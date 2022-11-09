import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products-slice'
import currencySlice from './currency-slice'
import navSlice from './nav-slice'


const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    nav: navSlice.reducer,
    currencies: currencySlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store
