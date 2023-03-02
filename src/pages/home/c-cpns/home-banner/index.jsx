import React, { memo } from 'react'
import { BannerWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const HomeBanner = memo(() => {
  const navigate = useNavigate()
  return (
    <BannerWrapper>
      <h1 className="banner-title">名企精英都在用的专业简历</h1>
      <p className="banner-text">
        15 分钟快速制作一份完美简历,简历咨询师在线帮助制作
      </p>
      <button
        className="button-33"
        onClick={() => navigate('/details?resumeId=1')}
      >
        免费生成专业简历
      </button>
    </BannerWrapper>
  )
})

/* CSS */

export default HomeBanner
