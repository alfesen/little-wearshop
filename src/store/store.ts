import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products-slice'
import currencySlice from './currency-slice'
import navSlice from './nav-slice'
import cartSlice from './cart-slice'
import backdropSlice from './backdrop-slice'

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    nav: navSlice.reducer,
    currencies: currencySlice.reducer,
    cart: cartSlice.reducer,
    backdrop: backdropSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store
