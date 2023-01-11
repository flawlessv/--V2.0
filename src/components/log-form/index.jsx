import React, { Fragment, memo, useEffect, useRef, useState, } from 'react'
import { LoginWrapper } from './style'
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import md5 from 'blueimp-md5';
import { Link, useNavigate } from 'react-router-dom';
import ForgetDialog from '@/pages/login/c-cpns/forget-pwd';
import { getMobileCode, loginByUsername, registerByMobile } from '../../services';
import axios from 'axios';
import InputItem from './c-cpns/input-item';
import PwdItem from './c-cpns/pwd-item';
import { useSelector } from 'react-redux';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LogForm = memo((props) => {
  const { isLogin = true } = props
  const [pwdLogin, setPwdLogin] = useState(true)
  const [title, setTitle] = useState(isLogin ? '用户名登录' : '注册')
  const [open, setOpen] = useState(false);
  // let title = isLogin ? '用户名登录' : '注册'
  const userRef = useRef()
  const pwdRef = useRef()
  const phoneRef = useRef()
  const imgCodeRef = useRef()
  const msgCodeRef = useRef()
  // 图片验证码的图片
  const { codeImg } = useSelector(state => ({ codeImg: state.code.codeImg }))
  //验证表单的正则表达式
  const regs =
  {
    reg_tel: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    reg_user: /^[a-zA-Z0-9]{4,16}$/,
    reg_pwd: /^[a-zA-Z0-9]{4,16}$/,
    reg_codeImg: /^-?[0-9]\d*$/,
    reg_codeMessage: /^[0-9]{4,4}$/,
  }
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // 改变登录方式
  const handleChangeLogin = () => {
    setPwdLogin(!pwdLogin)
    setTitle(pwdLogin ? '手机号登录' : '用户名登录')
  }
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
    // console.log(phoneRef.current.value);
    // 通过用户名登录
    loginByUsername({
      username: userRef.current.value,
      password: md5(pwdRef.current.value),
      key: codeImg.data.key,
      code: imgCodeRef.current.value
    }).then(res => {
      console.log(res.data);
    })
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
              {/* 表单 */}
              <FormControl sx={{ m: 0, width: '25ch' }} variant="standard">

                {/* 手机号方式登录 */}
                {title === '手机号登录' &&
                  <Fragment>
                    {/* 手机号 */}
                    <InputItem label="手机号" reg={regs.reg_tel} ref={phoneRef} id="input-with-phone">
                      <PhoneIphoneIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                    </InputItem>
                    {/* 手机验证码 */}
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

                {/* 账号密码方式登录 */}
                {title === '用户名登录' &&
                  < Fragment >
                    {/* 用户名 */}
                    <InputItem
                      label="用户名"
                      reg={regs.reg_user}
                      ref={userRef}
                      id="input-with-user">
                      <AccountCircle sx={{ color: 'action.active', mr: 0, my: 1 }} />
                    </InputItem>
                    {/* <div className="changeLoginMethods">
                <button>Bubble</button>

                </div> */}
                    {/* 密码 */}
                    <PwdItem
                      label="密码"
                      reg={regs.reg_pwd}
                      ref={pwdRef}
                      id="input-with-pwd"
                    ><LockIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                    </PwdItem>
                    {/* 图片验证码 */}
                    <InputItem
                      label="图片验证码"
                      ref={imgCodeRef}
                      id="input-with-imgCode"
                      reg={regs.reg_codeImg}
                      url={codeImg?.data?.codeUrl}
                    >
                      <CheckCircleIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                    </InputItem>
                  </Fragment>}
              </FormControl>
              {/* 提交按钮 */}
              <div className="input-boxes">
                <div className="inputBox">
                  <Button variant="contained" className='subBtn' type='submit' onClick={handleFormSumbit}>
                    {title === '注册' ? title : '登录'}
                  </Button>
                </div>
                {/* 改变登录方式 */}
                <div className="inputBox">
                  <Button variant="contained" className='subBtn' type='submit' onClick={() => handleChangeLogin()}>
                    {pwdLogin ? '手机号登录' : '用户名登录'}
                  </Button>
                </div>
              </div>
              {/* <Link className="loginMethod" to={isLogin ? '/register' : '/login'}>{'手机号登录'}</Link> */}
            </Box>
          </div>
        </div>
        {/* 忘记密码 */}
        {isLogin && <ForgetDialog></ForgetDialog>}
        <Link className="btns signup" to={isLogin ? '/register' : '/login'}>
          {isLogin ? '注册' : '登录'}
        </Link>
      </div >

      {/* 提示消息 */}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          账号或密码错误!!
        </Alert>
      </Snackbar >
    </LoginWrapper >
  )
})

export default LogForm