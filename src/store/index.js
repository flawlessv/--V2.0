import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './modules/login'
import resumeInfoSlice from './modules/resumeInfo'
import serviceSlice from './modules/service'
import orderSlice from './modules/order'
import editSlice from './modules/editResume'
const store = configureStore({
  reducer: {
    login: loginSlice,
    resume: resumeInfoSlice,
    service: serviceSlice,
    order: orderSlice,
    edit:editSlice
  }
})
export default store
