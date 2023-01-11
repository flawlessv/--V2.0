import React, { memo } from 'react'
import LogForm from '../../components/log-form'
import { RegisterWrapper } from './style'

const Register = memo(() => {
  return (
    <RegisterWrapper>
      <LogForm title='注册' />
    </RegisterWrapper>
  )
})

export default Register