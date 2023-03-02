import React, { memo } from 'react'
import { LogoWrapper } from './style'
import logoImg from '@/assets/img/logo.jpg'
import { useNavigate } from 'react-router-dom'
const HeaderLogo = memo(() => {
  const navigate = useNavigate()
  return (
    <LogoWrapper>
      <img src={logoImg} alt="在线简历服务平台" onClick={() => navigate('/')} />
    </LogoWrapper>
  )
})

export default HeaderLogo
