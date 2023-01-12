import React, { memo } from 'react'
import LogForm from '../../components/log-form'
import { RegisterWrapper } from './style'

const Register = memo(() => {
  return (
    <RegisterWrapper>
      <LogForm isLogin={false} />
    </RegisterWrapper>
  )
})

export default Register