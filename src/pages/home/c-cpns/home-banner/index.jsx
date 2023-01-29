import React, { memo } from 'react'
import { BannerWrapper } from './style'
import Button from '@mui/material-next/Button';

const HomeBanner = memo(() => {
    return (
        <BannerWrapper>
            <h1 className="banner-title">名企精英都在用的专业简历</h1>
            <p className="banner-text">15 分钟快速制作一份完美简历,简历咨询师在线帮助制作</p>
            <Button
                color="primary"
                size="large"
                variant="filled"
                className='banner-btn'
            >免费生成专业简历</Button>
        </BannerWrapper>
    )
})

export default HomeBanner