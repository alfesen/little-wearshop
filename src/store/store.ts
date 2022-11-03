import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './products-slice'
import navSlice from './nav-slice'

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    nav: navSlice.reducer,
  },
})

export default store
