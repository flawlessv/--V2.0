import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'

const AppFooter = memo((props) => {
  const location = useLocation()
  const footerData = [
    '首页',
    '简历模板',
    '简历咨询师',
    '关于我们',
    '常见问题',
    '联系我们',
    '服务协议',
    '隐私声明'
  ]
  const friendLinks = [
    '中南招聘网',
    '平顶山人才网',
    'boss直聘',
    'PPT模板',
    '简历设计网',
    '面试网'
  ]
  return (
    <FooterWrapper path={location.pathname}>
      {/* <div className="footer-content"> */}
      <p className="footer-title">在线简历，专业简历制作指导服务平台！</p>
      <p className="footer-subtitle">
        在线简历网，是一家专业的<b>简历制作指导平台</b>。
      </p>
      <p className="footer-subtitle">
        为求职者提供<b>简历制作、简历指导服务</b>,15分钟做出一份精美简历。
      </p>
      <p className="footer-subtitle">
        我们拥有专业的设计师和<b>简历咨询师</b>
        ，帮助无数求职者快速制作出满意的简历。
      </p>

      {/* 友情链接模块 */}
      <div className="friend-link">
        <span>友情链接：</span>
        {friendLinks.map((item) => (
          <Link className="friend-item" key={item}>
            {item}
          </Link>
        ))}
      </div>
      {/* 版权模块 */}
      <div className="right">
        ©2023 在线简历服务平台 | 豫ICP备2022009134号-1
      </div>
      {/* 底部链接模块 */}
      <div className="footer-link">
        {footerData.map((item) => (
          <Link className="link-item" key={item}>
            {item}
          </Link>
        ))}
      </div>
      {/* </div> */}
    </FooterWrapper>
  )
})

export default AppFooter
