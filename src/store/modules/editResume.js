import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getResumeContent } from '../../services/modules/resume'
// import { loginByUsername } from "../../services";
export const fetchResumeDataAction = createAsyncThunk(
  'editResume',
  async (payload, { dispatch }) => {
    const res = await getResumeContent()
    dispatch(setResumeInfo(res))
  }
)
const editResumeSlice = createSlice({
  name: 'editResume',
  initialState: {
    isOpenTab:false
  },
  reducers: {
    setResumeInfo(state, { payload }) {
      state = payload
    },
    setIsOpenTab(state, { payload }) {
      state.isOpenTab = payload
    }
  }
})
export const { setResumeInfo,setIsOpenTab } = editResumeSlice.actions
export default editResumeSlice.reducer
