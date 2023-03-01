import React, { memo } from "react";
import { Paywrapper } from "./style";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const PayCard = memo((props) => {
  const remakeRef = useRef();
  const { getRemake } = props;
  const [openRemake, setOpenRemake] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = useState("");
  // 处理支付的函数
  const handleClick = (value) => {
    setMsg(value);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // 处理添加备注的dialog
  const handleClickOpen = () => {
    setOpenRemake(true);
  };
  const handleCancel = () => {
    handleClick("取消添加备注~");
    setOpenRemake(false);
  };
  const handleOk = () => {
    handleClick("添加备注成功~");

    setOpenRemake(false);
    getRemake(remakeRef.current.value);
  };

  return (
    <Paywrapper>
      <div className="card">
        <div className="card-img">
          <img
            src="https://img1.baidu.com/it/u=2130911379,589528749&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400"
            alt=""
          />
        </div>
        <div className="card-info">
          <p className="text-title">面试辅导 </p>
          <p className="text-body">
            资深HR一对一辅导，带您掌握面试规则和技巧！
          </p>
        </div>

        <div className="card-footer">
          <span className="text-title">所需积分:199</span>
          <div className="card-button">
            {/* 添加备注 */}
            <Button
              variant="contained"
              startIcon={<DriveFileRenameOutlineIcon />}
              color="secondary"
              sx={{ mr: 2 }}
              onClick={handleClickOpen}
            >
              添加备注
            </Button>
            {/* 添加备注的dialog */}
            <Dialog open={openRemake}>
              <DialogTitle>添加备注</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  为你的订单添加备注,以让简历规划师明白您的需求
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="备注"
                  type="text"
                  fullWidth
                  variant="standard"
                  inputRef={remakeRef}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCancel}>取消</Button>
                <Button onClick={handleOk}>确定</Button>
              </DialogActions>
            </Dialog>
            <Button
              variant="contained"
              color="success"
              startIcon={<ShoppingCartCheckoutIcon />}
              onClick={() => handleClick("支付成功!")}
            >
              立即支付
            </Button>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </Paywrapper>
  );
});

export default PayCard;
