import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './products-slice'

const store = configureStore({
  reducer: ProductsSlice.reducer,
})

export default store
