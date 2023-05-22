import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCodeRequest, getUserInfo } from '../../services'
//获取图片验证码
export const fetchCodeUrlAction = createAsyncThunk(
  'fetchCode',
  (payload, { dispatch }) => {
    getCodeRequest().then((res) => dispatch(getCodeImg(res)))
  }
)
//获取用户信息
export const fetchUserInfoAction = createAsyncThunk(
  'fetchUserInfoAction',
  async (payload, { dispatch }) => {
    const res = await getUserInfo()
    if (res.code === 200) {
      console.log(res,'设置用户信息');
      dispatch(setUserInfo(res.data))
      dispatch(setIsLogin(true))
    }
  }
)
const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    codeImg: {},
    userInfo: {},
    login:false
  },
  reducers: {
    getCodeImg(state, { payload }) {
      state.codeImg = payload
    },
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    },
    setIsLogin(state,{payload}){
      state.login=payload
    }
  }
})
export const { getCodeImg, setUserInfo,setIsLogin } = loginSlice.actions
export default loginSlice.reducer
