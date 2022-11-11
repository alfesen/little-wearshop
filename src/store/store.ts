import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products-slice'
import currencySlice from './currency-slice'
import navSlice from './nav-slice'
import cartSlice from './cart-slice'

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    nav: navSlice.reducer,
    currencies: currencySlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store
