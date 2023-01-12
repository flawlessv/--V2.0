import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCodeRequest } from "../../services";
export const fetchCodeUrlAction = createAsyncThunk('fetchCode', (payload, { dispatch }) => {
    getCodeRequest().then(res => dispatch(getCodeImg(res)))
})
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
            state.userInfo = payload
        }
    }
})
export const { getCodeImg, setUserInfo } = codeSlice.actions
export default codeSlice.reducer