import React, { memo, useEffect, useRef, useState } from 'react'
import { SlideWrapper } from './style'
import { Carousel } from 'antd';
import img1Src from '@/assets/img/img1.jpg'
import img2Src from '@/assets/img/img2.jpg'
import img3Src from '@/assets/img/img3.jpg'
const HomeSlide = memo(() => {
    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <SlideWrapper>
            <Carousel autoplay className='slide'>
                <div>
                    <img src={img1Src} alt="" />
                </div>
                <div>
                    <img src={img2Src} alt="" />
                </div>
                <div>
                    <img src={img3Src} alt="" />
                </div>

            </Carousel>

        </SlideWrapper >
    )
})

export default HomeSlide