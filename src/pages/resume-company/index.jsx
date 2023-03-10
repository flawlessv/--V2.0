import React, { memo } from 'react'
import Soptimize from '../resume-service/c-cpns/s-optimize'
import Sstep from '../resume-service/c-cpns/s-step'
import CompanyCard from './c-cards'
import { CompanyWrapper } from './style'

const ResumeCompany = memo(() => {
  return (
    <CompanyWrapper>
      <CompanyCard></CompanyCard>
      <Soptimize></Soptimize>
      <Sstep></Sstep>
    </CompanyWrapper>
  )
})

export default ResumeCompany
