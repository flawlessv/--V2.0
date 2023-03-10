import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCodeRequest, getUserInfo } from '../../services'
export const fetchCodeUrlAction = createAsyncThunk(
  'fetchCode',
  (payload, { dispatch }) => {
    getCodeRequest().then((res) => dispatch(getCodeImg(res)))
  }
)
export const fetchUserInfoAction = createAsyncThunk(
  'fetchUserInfoAction',
  async (payload, { dispatch }) => {
    // getCodeRequest().then((res) => dispatch(getCodeImg(res)))
    const res = await getUserInfo()
    console.log(res, 'tokenUSer')
    if (res.code === 200) {
      dispatch(setUserInfo(res.data))
    }
  }
)
const codeSlice = createSlice({
  name: 'codeSlice',
  initialState: {
    codeImg: {},
    userInfo: {}
  },
  reducers: {
    getCodeImg(state, { payload }) {
      state.codeImg = payload
    },
    setUserInfo(state, { payload }) {
      console.log(payload, 'payload')
      state.userInfo = payload
    }
  }
})
export const { getCodeImg, setUserInfo } = codeSlice.actions
export default codeSlice.reducer
