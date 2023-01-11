import React, { Fragment, memo, useEffect, useRef, useState } from 'react'
import { LoginWrapper } from './style'
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PinIcon from '@mui/icons-material/Pin';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link } from 'react-router-dom';
import ForgetDialog from '@/pages/login/c-cpns/forget-pwd';
import { getMobileCode, loginByUsername, registerByMobile } from '../../services';
import axios from 'axios';
import InputItem from './c-cpns/input-item';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LogForm = memo((props) => {
  const { title = '登录', codeImg } = props
  const isLogin = title === '登录'
  const [showPassword, setShowPassword] = useState(false);
  const [validCode, setValidCode] = useState(false)
  const [messageTime, setMessageTime] = useState(3)
  const [inputErr, setInputErr] = useState(false)
  const userRef = useRef()
  const pwdRef = useRef()
  const phoneRef = useRef()
  const imgCodeRef = useRef()
  const msgCodeRef = useRef()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  // console.log(codeImg);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  //验证表单的正则表达式

  const regs =
  {
    reg_tel: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    reg_user: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    reg_pwd: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    reg_codeImg: /^-?[0-9]\d*$/,
    reg_codeMessage: /^[0-9]{4,4}$/,

  }
  //展示/隐藏密码
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //获取验证码
  const handleGetValidCode = () => {
    axios.get(`/api-send/sms?mobile=${phoneRef.current.value}`).then(res => console.log(res))
    // setValidCode(true)
    // setInterval(() => {
    //   const newTime = messageTime - 1
    //   setMessageTime(newTime)
    //   console.log(messageTime);
    //   messageTime === 0 && setValidCode(false)
    // }, 1000);
  }

  //表单提交
  const handleFormSumbit = () => {
    setOpen(true);
    console.log(phoneRef.current.value);
    // 通过用户名登录
    // loginByUsername({
    //   username: userRef.current.value,
    //   password: pwdRef.current.value,
    //   key: codeImg.data.key,
    //   // mobile: userRef.current.value,
    //   // code: codeRef.current.value
    //   code: codeRef.current.value
    // }).then(res => {
    //   console.log(res.data);
    // })
    // 用户注册
    /* console.log(codeRef.current.value);
    registerByMobile({
      mobile: phoneRef.current.value,
      code: codeRef.current.value,
      username: userRef.current.value,
      password: pwdRef.current.value
    }).then(res => {
      console.log(res);
    }) */
  }
  return (
    <LoginWrapper>
      <div className="container">
        <div className="drop">
          <div className="content">
            {/* 标题 */}
            <h2>{title}</h2>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              autoComplete="off"
            >
              <FormControl sx={{ m: 0, width: '25ch' }} variant="standard">
                {!isLogin &&
                  <Fragment>
                    {/* 手机号 */}
                    <InputItem label="手机号" reg={regs.reg_tel} ref={phoneRef} id="input-with-phone">
                      <PhoneIphoneIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                    </InputItem>
                    {/* 手机验证码 */}
                    {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 0 }}>
                      <CheckCircleIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                      <TextField
                        id="input-with-code"
                        label={isLogin ? "用户名/邮箱/手机号" : "验证码"}
                        variant="standard"
                        type='tel'
                        inputRef={mesCodeRef}
                      />
                      <Button
                        disabled={validCode}
                        onClick={() => handleGetValidCode()}
                        sx={{
                          position: 'absolute',
                          top: 86,
                          right: 5,
                          fontSize: '12px'
                        }}
                      >{validCode ? `${messageTime}后重新获取` : '获取验证码'}</Button>
                    </Box> */}
                    <InputItem
                      label="手机验证码"
                      ref={msgCodeRef}
                      id="input-with-msgCode"
                      reg={regs.reg_codeMessage}
                      btn={true}
                    >
                      <CheckCircleIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                    </InputItem>
                  </Fragment>

                }
                {/* 账户名 */}
                {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', my: isLogin ? 1 : 0 }}>
                  <AccountCircle sx={{ color: 'action.active', mr: 0, my: 1 }} />
                  <TextField
                    id="input-with-user"
                    label={isLogin ? "用户名/邮箱/手机号" : "用户名"}
                    variant="standard"
                    inputRef={userRef}
                  />
                </Box> */}
                <InputItem label="用户名" reg={regs.reg_user} ref={userRef} id="input-with-user">
                  <AccountCircle sx={{ color: 'action.active', mr: 0, my: 1 }} />
                </InputItem>
                {/* 密码 */}
                <InputItem label="密码" reg={regs.reg_pwd} ref={pwdRef} >
                  <LockIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                </InputItem>
                {/* 图片验证码 */}
                {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', my: isLogin ? 1 : 0 }}>
                  <PinIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                  <TextField
                    id="input-with-code"
                    label="验证码"
                    variant="standard"
                    inputRef={codeRef}
                  />
                  <img src={codeImg?.data?.codeUrl} alt="验证码" className='codeImg' />
                </Box> */}
                {isLogin && <InputItem
                  label="图片验证码"
                  ref={imgCodeRef}
                  id="input-with-imgCode"
                  reg={regs.reg_codeImg}
                  url={codeImg?.data?.codeUrl}
                >
                  <CheckCircleIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                </InputItem>}
              </FormControl>
              <div className="inputBox">
                {/* <input type="submit" value="登录" onClick={handleFormSumbit} /> */}
                <Button variant="contained" className='subBtn' type='submit' onClick={handleFormSumbit}>
                  {title}
                </Button>
              </div>
            </Box>
          </div>
        </div>
        <ForgetDialog></ForgetDialog>
        <Link className="btns signup" to={isLogin ? '/register' : '/login'}>{isLogin ? '注册' : '登录'}</Link>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
        {/* <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          登录成功!
        </Alert> */}
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          账号或密码错误!!
        </Alert>
      </Snackbar>
    </LoginWrapper >
  )
})

export default LogForm