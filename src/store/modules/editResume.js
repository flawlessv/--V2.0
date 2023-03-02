import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getResumeContent } from '../../services/modules/resume'
// import { loginByUsername } from "../../services";
export const fetchResumeDataAction = createAsyncThunk(
  'editResume',
  async (payload, { dispatch }) => {
    const res = await getResumeContent()
    dispatch(setResumeInfo(res))
    console.log(res)
  }
)
const editResumeSlice = createSlice({
  name: 'editResume',
  initialState: {},
  reducers: {
    setResumeInfo(state, { payload }) {
      state = payload
    }
  }
})
export const { setResumeInfo } = editResumeSlice.actions
export default editResumeSlice
