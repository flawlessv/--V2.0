import React, { memo } from 'react'
import { useSelector } from 'react-redux'
// import resumeInfo from "../../../../assets/data/resumeInfo";
import AvatarInfo from './c-cpns/Avatar'
import { BaseInfoWrapper } from './style'
// 用户基本信息
const UserInfo = memo(() => {
  const { baseInfo, jobIntent } = useSelector((state) => ({
    baseInfo: state.resume.resumeData.baseInfo,
    jobIntent: state.resume.resumeData.jobIntent
  }))
  const jobIntentInfo = Object.values(jobIntent)

  return (
    <BaseInfoWrapper>
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
      <div className="photo_box">
        <AvatarInfo />
      </div>
    </BaseInfoWrapper>
  )
})

export default UserInfo
