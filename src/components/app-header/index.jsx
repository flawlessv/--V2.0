import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'

import HeaderLogo from './c-cpns/header-logo'
import HeaderOpts from './c-cpns/header-opts'
import HeaderTabs from './c-cpns/header-tabs'
import { HeaderWrapper } from './style'
import { useLocation } from 'react-router-dom'
const AppHeader = memo(() => {
  const location=useLocation()
  const [showDropStyle, setShowDropStyle] = useState(false)
  // 滚轮向下划得时候改变header的样式
  useEffect(() => {
    const handleHeaderDrop = () => {
      window.scrollY > 0 ? setShowDropStyle(true) : setShowDropStyle(false)
    }
    window.addEventListener('scroll', handleHeaderDrop)
    return () => {
      window.removeEventListener('scroll', handleHeaderDrop)
    }
  }, [window.scrollY])
  return (
    <HeaderWrapper className='dropStyle' path={location.pathname}>
      <div className={classNames('header-content', { dropStyle: showDropStyle })}>
        <HeaderLogo />
        <HeaderTabs />
        <HeaderOpts />
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader