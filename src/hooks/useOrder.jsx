import { useDispatch } from "react-redux";
import { setOrderOpen } from "@/store/modules/order";
export default function useOrder() {
  const dispatch = useDispatch();
  function order() {
    dispatch(setOrderOpen(true));
  }
  return order;
}
