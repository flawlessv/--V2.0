import { configureStore } from "@reduxjs/toolkit";
import codeReducer from './modules/code'
const store = configureStore({
    reducer: {
        code: codeReducer
    }
})
export default store