import React, { memo, useEffect, useRef, useState } from 'react'
import LogForm from '../../components/log-form'
import { LoginWrapper } from './style'
import { useDispatch } from 'react-redux'
import { fetchCodeUrlAction } from '../../store/modules/code'
const Login = memo(() => {
  useEffect(() => {
    dispatch(fetchCodeUrlAction())
  }, [])
  const dispatch = useDispatch()
  return (
    <LoginWrapper>
      <LogForm></LogForm>
    </LoginWrapper>
  )
})

export default Login