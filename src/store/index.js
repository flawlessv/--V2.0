import { configureStore } from "@reduxjs/toolkit";
import codeReducer from "./modules/code";
import loginSlice from "./modules/login";
import resumeInfoSlice from "./modules/resumeInfo";
import serviceSlice from "./modules/service";
import orderSlice from "./modules/order";
const store = configureStore({
  reducer: {
    code: codeReducer,
    login: loginSlice,
    resume: resumeInfoSlice,
    service: serviceSlice,
    order: orderSlice,
  },
});
export default store;
