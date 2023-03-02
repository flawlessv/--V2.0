import React, { memo } from 'react'
import { CampusWrapper } from './style'
import TextField from '@mui/material/TextField'
import { DatePicker } from 'antd'
import { useDispatch } from 'react-redux'
import TabEditor from '../tab-Editor'
import {
  setCampusExperienceContent,
  setCampusExperienceEndTime,
  setCampusExperienceName,
  setCampusExperienceRole,
  setCampusExperienceStartTime
} from '../../../../../../store/modules/resumeInfo'
const { RangePicker } = DatePicker
const ProjectExperience = memo((props) => {
  const dispatch = useDispatch()
  const handleChangeTime = (dataString) => {
    const startTime = dataString[0]
    const endTime = dataString[1]
    dispatch(setCampusExperienceStartTime(startTime))
    dispatch(setCampusExperienceEndTime(endTime))
  }
  return (
    <CampusWrapper>
      <TextField
        id="outlined-basic"
        label="经历名称"
        variant="outlined"
        sx={{ marginRight: '10px' }}
        size="small"
        onChange={(e) => dispatch(setCampusExperienceName(e.target.value))}
      />
      <TextField
        id="outlined-basic"
        label="角色"
        variant="outlined"
        size="small"
        sx={{ marginRight: '10px' }}
        onChange={(e) => dispatch(setCampusExperienceRole(e.target.value))}
      />
      <RangePicker
        placeholder={['开始时间', '结束时间']}
        onChange={(_, dataString) => handleChangeTime(dataString)}
      />
      <TabEditor fn={setCampusExperienceContent}></TabEditor>
    </CampusWrapper>
  )
})

export default ProjectExperience
