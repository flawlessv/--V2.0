import { configureStore } from "@reduxjs/toolkit";
import codeReducer from './modules/code'
import loginSlice from "./modules/login";
import resumeInfoSlice from "./modules/resumeInfo";
const store = configureStore({
    reducer: {
        code: codeReducer,
        login:loginSlice,
        resume:resumeInfoSlice
    }
})
export default store