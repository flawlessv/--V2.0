import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { loginByUsername } from "../../services";
// export const postUserNameAction = createAsyncThunk('postUserName', (payload, { dispatch }) => {
//     console.log(payload);
//     loginByUsername().then(res => dispatch(setUserInfo(res)))
// })
const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    userInfo: {}
  },
  reducers: {
    setUserInfo(state, { payload }) {
      // console.log(payload);
      state.userInfo = payload
    }
  }
})
export const { setUserInfo } = loginSlice.actions
export default loginSlice
