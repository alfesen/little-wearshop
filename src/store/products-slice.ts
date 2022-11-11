import { createSlice } from '@reduxjs/toolkit'
import db from '../db/db.json'
import { Product, ProductState, Category } from '../types/Types'

const categories = db.categories
const products: Product[] = []

for (const category of categories) {
  category.products.forEach(product => products.push(product))
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: categories as Category[],
    products: products,
  } as ProductState,
  reducers: {},
})

export default productsSlice
