import React, { memo } from 'react'
import { ProjectExperienceWrapper } from './style'
import TextField from '@mui/material/TextField'
import { DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setProjectExperienceName } from '@/store/modules/resumeInfo'
import TabEditor from '../tab-Editor'
import {
  setProjectExperienceContent,
  setProjectExperienceEndTime,
  setProjectExperienceRole,
  setProjectExperienceStartTime
} from '../../../../../../store/modules/resumeInfo'
const { RangePicker } = DatePicker
const ProjectExperience = memo((props) => {
  const dispatch = useDispatch()
  const handleChangeTime = (dataString) => {
    const startTime = dataString[0]
    const endTime = dataString[1]
    dispatch(setProjectExperienceStartTime(startTime))
    dispatch(setProjectExperienceEndTime(endTime))
  }
  const { projectExperience } = useSelector((state) => ({
    projectExperience: state.resume.resumeData.projectExperience
  }))
  return (
    <ProjectExperienceWrapper>
      <TextField
        id="outlined-basic"
        label="经历名称"
        variant="outlined"
        sx={{ marginRight: '10px' }}
        size="small"
        onChange={(e) => dispatch(setProjectExperienceName(e.target.value))}
        defaultValue={projectExperience.projectName}
      />
      <TextField
        id="outlined-basic"
        label="角色"
        variant="outlined"
        size="small"
        sx={{ marginRight: '10px' }}
        onChange={(e) => dispatch(setProjectExperienceRole(e.target.value))}
        defaultValue={projectExperience.role}
      />
      <RangePicker
        placeholder={['开始时间', '结束时间']}
        onChange={(_, dataString) => handleChangeTime(dataString)}
        // defaultValue={projectExperience.startTime}
      />
      <TabEditor fn={setProjectExperienceContent} label="projectExperience" />
    </ProjectExperienceWrapper>
  )
})

export default ProjectExperience
