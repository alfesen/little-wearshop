import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    show: false
  },
  reducers: {
    toggleCart(state) {
      state.show = !state.show
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice
