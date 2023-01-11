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
  const { codeImg } = useSelector(state => ({ codeImg: state.code.codeImg}))
  return (
    <LoginWrapper>
      <LogForm codeImg={codeImg}></LogForm>
    </LoginWrapper>
  )
})

export default Login