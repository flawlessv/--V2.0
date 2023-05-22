import React, { memo } from 'react'
import { useSelector } from 'react-redux'
// import resumeInfo from "../../../../assets/data/resumeInfo";
import AvatarInfo from './c-cpns/Avatar'
import { BaseInfoWrapper } from './style'
import ResumeTitle from '../resume-title'
import { useParams } from 'react-router-dom'
import { PhoneOutlined,DatabaseOutlined,FileMarkdownOutlined ,AreaChartOutlined,FormOutlined,AliwangwangOutlined} from '@ant-design/icons'
// 用户基本信息
const UserInfo = memo((props) => {
  const params = useParams()
  const { baseInfo, jobIntent } = useSelector((state) => ({
    baseInfo: state.resume.resumeData.baseInfo,
    jobIntent: state.resume.resumeData.jobIntent
  }))
  const jobIntentInfo = Object.values(jobIntent)

  return (
    <BaseInfoWrapper id={params.id}>
      {params.id === '1' && (
        <dl className="base_info">
          <dt id="myname">{baseInfo.name}</dt>
          <dd className="job-intent">
            {jobIntentInfo.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </dd>
          <dd>
            <span>{baseInfo.birthday}</span>
            <span>{baseInfo.sex}</span>
            <span>{baseInfo.origin}</span>
            <span>{baseInfo.ethnic}</span>
          </dd>
          <dd>
            <span>{baseInfo.email}</span>
            <span>{baseInfo.telephone}</span>
          </dd>
        </dl>
      )}
      {params.id === '2' && (
        <>
          <div className="basic_info_box">
            <ResumeTitle title="基本信息"></ResumeTitle>
            <ul className="basic_info_list">
              <li>
                <span>姓名：</span>
                {baseInfo.name}
              </li>
              <li>
                <span>所在地：</span>
                {jobIntent.city}
              </li>
              <li>
                <span>求职岗位：</span>
                {jobIntent.intent}
              </li>
              <li>
                <span>期望薪资：</span>
                {jobIntent.expectSalary}
              </li>

            
              <li>
                <span>生日：</span>
                {baseInfo.birthday}
              </li>
              <li>
                <span>性别：</span>
                {baseInfo.sex}
              </li>
              <li>
                <span>生源地：</span>
                {baseInfo.origin}
              </li>
              <li>
                <span>民族：</span>
                {baseInfo.ethnic}
              </li>
              <li>
                <span>邮箱：</span>
                {baseInfo.email}
              </li>
              <li>
                <span>手机号：</span>
                {baseInfo.telephone}
              </li>
            </ul>
          </div>
        </>
      )}
      {params.id === '3' && (
        <dl className="basic_info_list" style={{ fontsize: '13px' }}>
          <dt style={{ color: 'rgb(21, 117, 191)' }}>
            <b id="myname" style={{ bordercolor: 'rgb(21, 117, 191)' }}>
              {baseInfo.name}
            </b>
            <p className="yixiang_tip" style={{ fontsize: '13px' }}>
              <span>求职岗位：{jobIntent.intent}</span>
            </p>
          </dt>
          <dd>
            <DatabaseOutlined />
            <span>出生年月</span>：2000-09
          </dd>
          <dd>
          <AliwangwangOutlined />
            <span>性　　别</span>：{baseInfo.sex}
          </dd>
          <dd>
          <PhoneOutlined />
            <span>联系电话</span>：{baseInfo.telephone}
          </dd>
          <dd>
          <FileMarkdownOutlined />
            <span>联系邮箱</span>：{baseInfo.email}
          </dd>
          <dd>
          <AreaChartOutlined />
            <span>生源地</span>：{baseInfo.origin}
          </dd>
          <dd>
          <FormOutlined />
            <span>民族</span>：{baseInfo.ethnic}
          </dd>
        </dl>
      )}
      <div className="photo_box">
        <AvatarInfo />
      </div>
    </BaseInfoWrapper>
  )
})

export default UserInfo
