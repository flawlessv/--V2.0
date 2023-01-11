import React, { memo, useEffect, useRef, useState } from 'react'
import LogForm from '../../components/log-form'
import { LoginWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCodeUrl } from '../../store/modules/code'
const Login = memo(() => {
  useEffect(() => {
    dispatch(fetchCodeUrl())
  }, [])
  const dispatch = useDispatch()
  return (
    <LoginWrapper>
      <LogForm></LogForm>
    </LoginWrapper>
  )
})

export default Login