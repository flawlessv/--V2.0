import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { setOrderOpen } from "../../../../store/modules/order";
import OrderStepper from "./c-cpns/order-steps";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SorderDialog() {
  const { orderOpen } = useSelector((state) => ({
    orderOpen: state.order.orderOpen,
  }));
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOrderOpen(false));
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={orderOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              申请简历服务
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              保存
            </Button>
          </Toolbar>
        </AppBar>
        <OrderStepper></OrderStepper>
      </Dialog>
    </div>
  );
}
