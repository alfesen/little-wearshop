import { createSlice, current } from '@reduxjs/toolkit'
import db from '../db/db.json'
import { ProductState , Category} from '../types/Types'


const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: db.categories as Category[],
  } as ProductState,
  reducers: {
    console(state) {
      console.log(current(state))
    },
  },
})

export const productsActions = ProductsSlice.actions

export default ProductsSlice
