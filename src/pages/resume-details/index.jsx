import React, { memo } from 'react'
import ResumeMain from './c-cpns/resume-main'
import { DetailsWrapper } from './style'
import RDrawer from '../resume-bottomTab'
import ResumeHelper from './c-cpns/resume-helper'
import ResumeHelpOpt from './c-cpns/resume-helpOpt'
const ResumeDetails = memo(() => {
  return (
    <DetailsWrapper>
      <ResumeHelper></ResumeHelper>
      <ResumeMain></ResumeMain>
      <ResumeHelpOpt></ResumeHelpOpt>
      <RDrawer></RDrawer>
    </DetailsWrapper>
  )
})

export default ResumeDetails
