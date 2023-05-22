import React, { memo } from 'react'
import { setCertificateHonor } from '../../../../../../store/modules/resumeInfo'
import TabEditor from '../tab-Editor'
const CertificateHonor = memo((props) => {
  return (
    <div>
      <TabEditor fn={setCertificateHonor} label='certificateHonor'/>
    </div>
  )
})

export default CertificateHonor
