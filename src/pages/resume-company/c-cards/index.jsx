import React, { memo } from 'react'
import { CCardWrapper } from './style'
import banner from '@/assets/img/banner_bg2.jpg'
import { useNavigate } from 'react-router-dom'
const CompanyCard = memo(() => {
  const navigate = useNavigate()
  const data = [
    {
      title: '实习生',
      subtitle: '资深HR一对一辅导，带您掌握面试规则和技巧！',
      content:
        '无论你是否零经验在找第一份实习无从下笔，还是不知道怎样面对明天的面试，在这里你都可以得到最契合自身的帮助站在用人方的角度为你撰写简历、辅导面试，往期用户平均投递后 9.4 天收到 Offer'
    },
    {
      title: '校招版',
      subtitle: '梳理职业发展方向，制定职业发展计划',
      content:
        '我们的简历已累计为上万名校招求职者量身提供了简历、面试、职业规划等服务，往期用户入职率高于应届生入职率 27.2 个百分点'
    },
    {
      title: '在职版',
      subtitle: '严选200多位CEO、500强企业人力资源管理者、HRD等',
      content:
        '各行业资深HR任你挑选，一对一沟通百分百定制，为你量身打造一份专属于你的简历、面试、规划方案。已服务上千名用户，至今零差评'
    }
  ]
  return (
    <CCardWrapper banner={banner}>
      <div className="banner_bg" data-v-001a2cde=""></div>
      <h2>求职服务，让求职更容易</h2>

      <p className="ptext">资深HR一对一服务，为求职保驾护航</p>

      <div className="morecard">
        {data.map((item) => (
          <div className="card" key={item.title}>
            <h3 className="card__title">{item.title}</h3>
            <h5>{item.subtitle}</h5>
            <p className="card__content">{item.content}</p>
            <div className="card__date">April 15, 2022</div>
            <div className="card__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="15"
                width="15"
              >
                <path
                  fill="#fff"
                  d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <button
        className="button-82-pushable"
        onClick={() => navigate('/service')}
      >
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">申请服务</span>
      </button>
    </CCardWrapper>
  )
})

export default CompanyCard
