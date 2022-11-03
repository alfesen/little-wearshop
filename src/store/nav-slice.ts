import { createSlice } from '@reduxjs/toolkit'
import { Nav } from '../types/Types'

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    show: false,
  } as Nav,
  reducers: {
    toggleNav(state) {
      state.show = !state.show
    },
  },
})

export const navActions = navSlice.actions

export default navSlice