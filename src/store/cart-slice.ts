import { createSlice } from '@reduxjs/toolkit'
import { CartState } from '../types/Types'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    show: false,
  } as CartState,
  reducers: {
    openCart(state) {
      state.show = true
    },
    closeCart(state) {
      state.show = false
    },
    addProductToCart(state, action) {
      const product = action.payload
      const existingProduct = state.cartItems.find(
        item => item.id === product.id
      )
      if (!existingProduct) {
        state.cartItems.push(product)
      }
      if (existingProduct) {
        existingProduct.amount = existingProduct.amount + product.amount
        existingProduct.price = existingProduct.price + product.price
      }
    },
    removeProductFromCart(state, action) {
      const productId = action.payload
      const existingProduct = state.cartItems.find(
        item => item.id === productId
      )
      if (existingProduct) {
        state.cartItems = state.cartItems.filter(item => item.id !== productId)
      }
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice
