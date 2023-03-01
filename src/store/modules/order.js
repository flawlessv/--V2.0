import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderInfo } from "../../services/modules/order";
export const fetchOrderInfoAction = createAsyncThunk(
  "OrderInfoAction",
  async ({ pageSize, pageNum, userId }, { dispatch }) => {
    const res = await getOrderInfo(pageSize, pageNum, userId);
    dispatch(setOrderInfo(res.data.rows));
    dispatch(setOrderTotal(res.data.total));
  }
);
const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orderOpen: false,
    orderTotal: 0,
    orderInfo: [],
  },
  reducers: {
    setOrderOpen(state, { payload }) {
      // console.log(payload);
      state.orderOpen = payload;
    },
    setOrderInfo(state, { payload }) {
      state.orderInfo = payload;
    },
    setOrderTotal(state, { payload }) {
      state.orderTotal = payload;
    },
  },
});
export const { setOrderOpen, setOrderInfo, setOrderTotal } = orderSlice.actions;
export default orderSlice.reducer;
