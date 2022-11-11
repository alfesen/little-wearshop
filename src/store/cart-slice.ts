import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    show: false
  },
  reducers: {
    openCart(state) {
      state.show = true
    },
    closeCart(state) {
      state.show = false
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice
