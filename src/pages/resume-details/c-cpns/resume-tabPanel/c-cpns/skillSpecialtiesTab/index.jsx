import React, { memo } from 'react'
import { setSkillSpecialties } from '../../../../../../store/modules/resumeInfo'
import TabEditor from '../tab-Editor'

const SkillSpecialties = memo((props) => {
  return (
    <div>
      <TabEditor fn={setSkillSpecialties} label='skillSpecialties'></TabEditor>
    </div>
  )
})

SkillSpecialties.propTypes = {}

export default SkillSpecialties
