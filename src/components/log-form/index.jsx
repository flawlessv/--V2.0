import React, { Fragment, memo, useEffect, useRef, useState } from 'react'
import { LoginWrapper } from './style'
import Box from '@mui/material/Box'
import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import md5 from 'blueimp-md5'
import { useNavigate } from 'react-router-dom'
import ForgetDialog from '@/pages/login/c-cpns/forget-pwd'
import {
  getMobileCode,
  loginByMobile,
  loginByUsername,
  registerByMobile
} from '../../services'
import InputItem from './c-cpns/input-item'
import PwdItem from './c-cpns/pwd-item'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../store/modules/code'
import { setToken } from '@/utils/auth.js'
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
const LogForm = memo((props) => {
  const { isLogin = true } = props
  const [pwdLogin, setPwdLogin] = useState(true)
  const [alertMsg, setAlertMsg] = useState({})
  const [title, setTitle] = useState(isLogin ? '用户名登录' : '注册')
  const [open, setOpen] = useState(false)
  const timerCount = 60 // 默认60秒
  const [btnSecond, setBtnSecond] = useState(timerCount)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userRef = useRef()
  const pwdRef = useRef()
  const phoneRef = useRef()
  const imgCodeRef = useRef()
  const msgCodeRef = useRef()
  const timerRef = useRef(null) // 记录时间的定时器
  useEffect(() => {
    if (btnSecond === 0) {
      clearInterval(timerRef.current) // 清空定时器
      setBtnSecond(timerCount) // 重新将技术器设置为60秒
    }
  }, [btnSecond])
  // 图片验证码的图片
  const { codeImg } = useSelector((state) => ({ codeImg: state.code.codeImg }))

  //验证表单的正则表达式
  const regs = {
    reg_tel:
      /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    reg_user: /^[a-zA-Z0-9]{4,16}$/,
    reg_pwd: /^[a-zA-Z0-9]{4,16}$/,
    reg_codeImg: /^-?[0-9]\d*$/,
    reg_codeMessage: /^[0-9]{4,4}$/
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  // 改变登录方式
  const handleChangeLogin = () => {
    setPwdLogin(!pwdLogin)
    setTitle(pwdLogin ? '手机号登录' : '用户名登录')
  }
  //改变登录或注册
  const changeLoginRegister = () => {
    title === '注册' ? setTitle('用户名登录') : setTitle('注册')
    navigate(title === '注册' ? '/login' : '/register')
  }
  // 倒计时函数
  const cutCount = () => {
    setBtnSecond((prevState) => prevState - 1)
    // 为什么这里要用函数- 如果用count 发现count闭包了 不会发生变化了
  }

  //获取手机验证码
  const handleGetValidCode = async () => {
    const mobile = phoneRef.current.value
    if (regs.reg_tel.test(mobile)) {
      cutCount()
      timerRef.current = setInterval(cutCount, 1000)
      const res = await getMobileCode(mobile)
      if (res.code === 200) {
        setAlertMsg({ msg: res.msg, success: true })
      }
    } else {
      setAlertMsg({ msg: '手机号格式不正确', success: false })
    }
    setOpen(true)
  }
  //表单提交
  const handleFormSumbit = async () => {
    let res = ''
    // 通过用户名登录
    if (title === '用户名登录') {
      res = await loginByUsername({
        username: userRef.current.value,
        password: md5(pwdRef.current.value),
        key: codeImg.data.key,
        code: imgCodeRef.current.value
      })
    }

    //通过手机号登录
    if (title === '手机号登录') {
      const mobile = phoneRef.current.value
      const msgCode = msgCodeRef?.current.value
      //检查手机号格式是否正确
      if (!regs.reg_tel.test(mobile)) {
        setAlertMsg({ msg: '手机号格式不正确', success: false })
        setOpen(true)
        return
      }
      //检查手机验证码格式是否正确
      if (!regs.reg_codeMessage.test(msgCode)) {
        setAlertMsg({ msg: '手机验证码格式不正确', success: false })
        setOpen(true)
        return
      }
      res = await loginByMobile({
        mobile,
        code: msgCode
      })
    }
    console.log(res, 'rrrrrrrrrrrrrrrrrrr')
    // 用户注册
    if (title === '注册') {
      res = await registerByMobile({
        mobile: phoneRef.current.value,
        code: msgCodeRef.current.value,
        username: userRef.current.value,
        password: pwdRef.current.value
      })
      console.log(res, 'zhuce')
    }
    //判断是否操作成功
    if (res.code === 200) {
      setAlertMsg({ msg: res.msg, success: true })
      if (title !== '注册') {
        const accessToken = res.data.accessToken
        const refreshToken = res.data.refreshToken
        setToken('access_token', accessToken)
        setToken('refresh_token', refreshToken)
        console.log(res.data,'登录过后的data');
        dispatch(setUserInfo(res.data))
        setTimeout(()=>{
          navigate('/')
        },500)
      }
    } else if (res.code === 400) {
      setAlertMsg({ msg: res.msg, success: true })
      // navigate('/')
    } else {
      setAlertMsg({ msg: res.response.data.msg, success: false })
    }
    setOpen(true)
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
                '& .MuiTextField-root': { m: 1, width: '25ch' }
              }}
              autoComplete="off"
            >
              {/* 表单 */}
              <FormControl sx={{ m: 0, width: '25ch' }} variant="standard">
                {/* 手机号方式登录 */}
                {(title === '手机号登录' || title === '注册') && (
                  <Fragment>
                    {/* 手机号 */}
                    <InputItem
                      label="手机号"
                      reg={regs.reg_tel}
                      ref={phoneRef}
                      id="input-with-phone"
                    >
                      <PhoneIphoneIcon
                        sx={{ color: 'action.active', mr: 0, my: 1 }}
                      />
                    </InputItem>
                    {/* 手机验证码 */}
                    <InputItem
                      label="手机验证码"
                      ref={msgCodeRef}
                      id="input-with-msgCode"
                      reg={regs.reg_codeMessage}
                    >
                      <CheckCircleIcon
                        sx={{ color: 'action.active', mr: 0, my: 1 }}
                      />
                      <Button
                        // disabled={validCode}
                        onClick={() => handleGetValidCode()}
                        disabled={btnSecond !== timerCount}
                        className="msgBtn"
                        sx={{
                          position: 'absolute',
                          top: 86,
                          right: 5,
                          fontSize: '12px',
                          cursor: 'pointer',
                          zIndex: '333',
                          color: '#144fff'
                        }}
                      >
                        {btnSecond === timerCount
                          ? '获取验证码'
                          : btnSecond + 's'}
                      </Button>
                    </InputItem>
                  </Fragment>
                )}
                {/* 账号密码方式登录 */}
                {(title === '用户名登录' || title === '注册') && (
                  <Fragment>
                    {/* 用户名 */}
                    <InputItem
                      label="用户名"
                      reg={regs.reg_user}
                      ref={userRef}
                      id="input-with-user"
                    >
                      <AccountCircle
                        sx={{ color: 'action.active', mr: 0, my: 1 }}
                      />
                    </InputItem>
                    {/* 密码 */}
                    <PwdItem
                      label="密码"
                      reg={regs.reg_pwd}
                      ref={pwdRef}
                      id="input-with-pwd"
                    >
                      <LockIcon sx={{ color: 'action.active', mr: 0, my: 1 }} />
                    </PwdItem>
                    {/* 图片验证码 */}
                    {title === '用户名登录' && (
                      <InputItem
                        label="图片验证码"
                        ref={imgCodeRef}
                        id="input-with-imgCode"
                        reg={regs.reg_codeImg}
                        url={codeImg?.data?.codeUrl}
                      >
                        <CheckCircleIcon
                          sx={{ color: 'action.active', mr: 0, my: 1 }}
                        />
                      </InputItem>
                    )}
                  </Fragment>
                )}
              </FormControl>
              {/* 提交按钮 */}
              <div className="input-boxes">
                <div className="inputBox">
                  <Button
                    variant="contained"
                    className="subBtn"
                    onClick={() => {
                      handleFormSumbit()
                    }}
                  >
                    {title === '注册' ? title : '登录'}
                  </Button>
                </div>
              </div>
            </Box>
          </div>
        </div>
        {/* 忘记密码 */}
        {!(title === '注册') && <ForgetDialog></ForgetDialog>}
        <div className="btns signup" onClick={() => changeLoginRegister()}>
          {title === '注册' ? '登录' : '注册'}
        </div>
        {/* 改变登录或注册 */}
        <div className="btns change" onClick={() => handleChangeLogin()}>
          {pwdLogin ? '手机号登录' : '用户名登录'}
        </div>
      </div>
      {/* 提示消息 */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Alert
          onClose={handleClose}
          severity={alertMsg.success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {alertMsg?.msg}
        </Alert>
      </Snackbar>
    </LoginWrapper>
  )
})

export default LogForm
