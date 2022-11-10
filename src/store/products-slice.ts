import { createSlice } from '@reduxjs/toolkit'
import db from '../db/db.json'
import { ProductState, Category } from '../types/Types'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: db.categories as Category[],
  } as ProductState,
  reducers: {},
})

export default productsSlice
