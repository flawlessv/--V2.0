import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import HotTemplate from './c-cpns/home-hotTemplate'
import HomeSlide from './c-cpns/home-slide'
import { HomeWrapper } from './style'
//简历特点
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import KeyIcon from '@mui/icons-material/Key'
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import HomeCharact from './c-cpns/home-charact'
import HomeService from './c-cpns/home-service'
import { useDispatch } from 'react-redux'
import { fetchUserInfoAction } from '../../store/modules/login'
const Home = memo(() => {
  const charactData = [
    {
      title: '自动排版',
      subtitle: '只需填写内容，程序会自动排版出精美的简历。',
      element: (
        <FileCopyIcon color="primary" sx={{ width: '80px', height: '80px' }} />
      )
    },

    {
      title: '模块定制',
      subtitle: '所有简历模块皆可自由调整、隐藏或显示',
      element: (
        <ContentCutIcon
          color="secondary"
          sx={{ width: '80px', height: '80px' }}
        />
      )
    },
    {
      title: '皮肤色彩定制',
      subtitle: '千万种皮肤随心定制，做出独一无二的简历',
      element: (
        <ColorLensIcon color="primary" sx={{ width: '80px', height: '80px' }} />
      )
    },
    {
      title: '隐私保密',
      subtitle: '简历可设置三种隐私模式，保密、密码、公开',
      element: (
        <KeyIcon color="secondary" sx={{ width: '80px', height: '80px' }} />
      )
    },
    {
      title: '一键换模板',
      subtitle: '填写一份简历，即可一键切换所有模板',
      element: (
        <AddToHomeScreenIcon
          color="primary"
          sx={{ width: '80px', height: '80px' }}
        />
      )
    },
    {
      title: '一键下载',
      subtitle: '一键下载简历，打印、投递方便快捷',
      element: (
        <CloudDownloadIcon
          color="secondary"
          sx={{ width: '80px', height: '80px' }}
        />
      )
    }
  ]
  const dispatch = useDispatch()
  //获取用户信息
  let time = Date.now()
  // console.log(time)
  useEffect(() => {
    let time2 = Date.now()
    console.log(time2 - time,'首页加载时间')
    dispatch(fetchUserInfoAction())
  }, [dispatch,time])
  return (
    <HomeWrapper>
      <HomeBanner />
      <HomeSlide />
      <HotTemplate />
      <div className="homeCharact">
        <h3>全民简历特点</h3>
        <div className="homeCharactItmes">
          {charactData.map((item) => (
            <HomeCharact key={item.title} cData={item} />
          ))}
        </div>
      </div>
      <HomeService />
    </HomeWrapper>
  )
})

export default Home
