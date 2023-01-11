import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCodeRequest, loginByUsername } from "../../services";
export const fetchCodeUrl = createAsyncThunk('fetchCode', (payload, { dispatch }) => {
    getCodeRequest().then(res => dispatch(getCodeImg(res)))
    // loginByUsername().then(res=>dispatch())
})
const codeSlice = createSlice({
    name: 'codeSlice',
    initialState: {
        codeImg: ''
    },
    reducers: {
        getCodeImg(state, { payload }) {
            state.codeImg = payload
        }
    }
})
export const { getCodeImg } = codeSlice.actions
export default codeSlice.reducer