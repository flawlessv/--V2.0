import React, { memo } from 'react'
import { setSelfEvaluation } from '../../../../../../store/modules/resumeInfo'
import TabEditor from '../tab-Editor'
const SelfEvaluation = memo((props) => {
  return (
    <div>
      <TabEditor fn={setSelfEvaluation} />
    </div>
  )
})

export default SelfEvaluation
