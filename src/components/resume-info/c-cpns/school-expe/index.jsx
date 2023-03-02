import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import ResumeContent from '../resume-content'
import ResumeTitle from '../resume-title'
import { CampusWrapper } from './style'

const SchoolExpe = memo((props) => {
  const { campusExperience } = useSelector((state) => ({
    campusExperience: state.resume.resumeData.campusExperience
  }))
  return (
    <CampusWrapper>
      <ResumeTitle title="学院经历"></ResumeTitle>
      <ResumeContent data={campusExperience} flag="e"></ResumeContent>
    </CampusWrapper>
  )
})

export default SchoolExpe
