import { configureStore } from "@reduxjs/toolkit";
import codeReducer from './modules/code'
import loginSlice from "./modules/login";
const store = configureStore({
    reducer: {
        code: codeReducer,
        login:loginSlice
    }
})
export default store