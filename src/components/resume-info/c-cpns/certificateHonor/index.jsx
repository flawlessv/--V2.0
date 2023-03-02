import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import ResumeTitle from '../resume-title'
import { ProjExpeWrapper } from './style'

const CertificateHonor = memo((props) => {
  const { certificateHonor } = useSelector((state) => ({
    certificateHonor: state.resume.resumeData.certificateHonor
  }))
  return (
    <ProjExpeWrapper>
      <ResumeTitle title="荣誉证书"></ResumeTitle>
      <div
        className="editor-content"
        dangerouslySetInnerHTML={{ __html: certificateHonor }}
      ></div>
    </ProjExpeWrapper>
  )
})

export default CertificateHonor
