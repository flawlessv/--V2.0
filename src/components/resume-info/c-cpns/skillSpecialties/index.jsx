import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import ResumeTitle from '../resume-title'
import { ProjExpeWrapper } from './style'

const SkillSpecialties = memo((props) => {
  const { skillSpecialties } = useSelector((state) => ({
    skillSpecialties: state.resume.resumeData.skillSpecialties
  }))
  return (
    <ProjExpeWrapper>
      <ResumeTitle title="知识技能"></ResumeTitle>
      <div
        className="editor-content"
        dangerouslySetInnerHTML={{ __html: skillSpecialties }}
      ></div>
    </ProjExpeWrapper>
  )
})

export default SkillSpecialties
