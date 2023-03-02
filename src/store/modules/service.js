import { createSlice } from '@reduxjs/toolkit'
const serviceSlice = createSlice({
  name: 'serviceSlice',
  initialState: {
    current: 1
  },
  reducers: {
    setCurrent(state, { payload }) {
      state.current = payload
    }
  }
})
export const { setCurrent } = serviceSlice.actions
export default serviceSlice.reducer
