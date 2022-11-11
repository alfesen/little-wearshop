import {createSlice} from '@reduxjs/toolkit'
import {BackdropState} from '../types/Types'

const backdropSlice = createSlice({
  name: 'backdrop',
  initialState: {
    backdrop: false
  } as BackdropState,
  reducers: {
    closeBackdrop(state) {
      state.backdrop = false
    },
  }
})

export const backdropActions = backdropSlice.actions

export default backdropSlice