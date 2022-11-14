import { createSlice } from '@reduxjs/toolkit'
import { CartState } from '../types/Types'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    show: false,
    totalAmount: 0,
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
      state.totalAmount = state.totalAmount + product.price
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
        state.totalAmount = state.totalAmount - existingProduct.price
      }
      if (state.cartItems.length === 0) {
        state.totalAmount = 0
      }
    },
    addOne(state, action) {
      const productId = action.payload
      const existingProduct = state.cartItems.find(
        item => item.id === productId
      )
      if (existingProduct) {
        state.totalAmount =
          state.totalAmount + existingProduct.price / existingProduct.amount
        existingProduct.amount += 1
        existingProduct.price =
          existingProduct.price + existingProduct.price / existingProduct.amount
      }
    },

    removeOne(state, action) {
      const productId = action.payload
      const existingProduct = state.cartItems.find(
        item => item.id === productId
      )
      if (existingProduct && existingProduct.amount > 0) {
        existingProduct.amount -= 1
        existingProduct.price =
          existingProduct.price -
          existingProduct.price / (existingProduct.amount + 1)

        state.totalAmount =
          state.totalAmount -
          existingProduct.price / (existingProduct.amount)
      }
      if (existingProduct && existingProduct.amount === 0) {
        state.cartItems = state.cartItems.filter(item => item.id !== productId)
        state.totalAmount = 0
      }
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice
