import PropTypes from 'prop-types'
import React, { memo } from 'react'
import TabEditor from '../tab-Editor'
import EditorInputs from '../editor-inputs'
import { setWorkExpeInfo } from '../../../../../../store/modules/resumeInfo'
import { useSelector } from 'react-redux'
const orkExperience = memo((props) => {
  const data = [
    {
      name: 'experienceName',
      label: '经历名称'
    },
    {
      name: 'role',
      label: '角色'
    },
    {
      name: 'time',
      label: '时间'
    }
  ]
  const { workExperience } = useSelector((state) => ({
    workExperience: state.resume.resumeData.workExperience
  }))
  return (
    <div className="re-skill">
      <EditorInputs data={data} name={workExperience.companyName} role={workExperience.posts}></EditorInputs>
      <TabEditor fn={setWorkExpeInfo} label='workExperience'></TabEditor>
    </div>
  )
})

orkExperience.propTypes = {}

export default orkExperience
