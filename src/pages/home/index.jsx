import React, { memo } from 'react'
import HomeBanner from './c-cpns/home-banner'
import HomeResume from './c-cpns/home-resumeImg'
import HomeSlide from './c-cpns/home-slide'
import { HomeWrapper } from './style'

const Home = memo(() => {
    return (
        <HomeWrapper>
            <HomeBanner />
            <HomeSlide />
            <HomeResume />
        </HomeWrapper>
    )
})

export default Home