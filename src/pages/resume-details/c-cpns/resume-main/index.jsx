import React, { memo, useRef, useEffect, Fragment } from 'react'
import { ResumeMainWrapper } from './style'
import { useReactToPrint } from 'react-to-print'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResumeInfoAction } from '@/store/modules/resumeInfo'

import UserInfo from '../../../../components/resume-info/c-cpns/user-info'
import WorkExpe from '../../../../components/resume-info/c-cpns/work-expe'
import SchoolExpe from '../../../../components/resume-info/c-cpns/school-expe'
import ProjExpe from '../../../../components/resume-info/c-cpns/project-expe'
import CertificateHonor from '../../../../components/resume-info/c-cpns/certificateHonor'
import SelfEvaluation from '../../../../components/resume-info/c-cpns/selfEvaluation'
import SkillSpecialties from '../../../../components/resume-info/c-cpns/skillSpecialties'
import ResumeHeader from '../../../../components/resume-info/c-cpns/resume-header'
import { useNavigate, useParams } from 'react-router-dom'
import { setIsOpenTab } from '../../../../store/modules/editResume'
const ResumeMain = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchResumeInfoAction())
  }, [dispatch])
  const pdfRef = useRef()
  const downloadResume = useReactToPrint({ content: () => pdfRef.current })

  const navigator = useNavigate()
  const prams = useParams()
  //更换模板
  const changeTemplate = () => {
    let id = 0
    if (prams.id === '1') {
      id = 2
    }
    if (prams.id === '2') {
      id = 3
    }
    if (prams.id === '3') {
      id = 1
    }
    navigator(`/customized/${id}`)
  }
  const handleUserInfoClick = () => {
    console.log('handleUserInfoClick')
    dispatch(setIsOpenTab(true))
  }
  return (
    <ResumeMainWrapper>
      {/* 下载按钮 */}
      <button className="cssbuttons-io-button" onClick={() => downloadResume()}>
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
            fill="currentColor"
          ></path>
        </svg>
        <span>下载简历</span>
      </button>
      <button
        className="cssbuttons-io-button btn2"
        onClick={() => changeTemplate()}
      >
        <span>更换模板</span>
      </button>
      <div className="resume" ref={pdfRef}>
        <ResumeHeader></ResumeHeader>
        {/* 简历信息 */}
        <div onClick={handleUserInfoClick}>
        <UserInfo ></UserInfo>
      
         
        <div className="resume_content">
          <SkillSpecialties></SkillSpecialties>
          <WorkExpe></WorkExpe>
          <SchoolExpe></SchoolExpe>
          <ProjExpe></ProjExpe>
          <CertificateHonor></CertificateHonor>
          <SelfEvaluation></SelfEvaluation>
        </div>
      </div>
      </div>
    </ResumeMainWrapper>
  )
})

export default ResumeMain
