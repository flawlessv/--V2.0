import React, { memo, useEffect } from 'react'
import LogForm from '../../components/log-form'
import { LoginWrapper } from './style'
import { useDispatch } from 'react-redux'
import { fetchCodeUrlAction } from '../../store/modules/code'
const Login = memo(() => {
  const dispatch = useDispatch()
  // 获取图片验证码
  useEffect(() => {
    dispatch(fetchCodeUrlAction())
  }, [dispatch])
  return (
    <LoginWrapper>
      <LogForm></LogForm>
    </LoginWrapper>
  )
})

export default Login
