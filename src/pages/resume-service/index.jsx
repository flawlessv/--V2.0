import React, { memo } from 'react'
import ResumeMain from './c-cpns/resume-main'
import { RServiceWrapper } from './style'
import RDrawer from '../resume-dingzhi'
const ResumeService = memo(() => {
  return (
    <RServiceWrapper>
      <ResumeMain></ResumeMain>
      <RDrawer></RDrawer>
    </RServiceWrapper>
  )
})

export default ResumeService