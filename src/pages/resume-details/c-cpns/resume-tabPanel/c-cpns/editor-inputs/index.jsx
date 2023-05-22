import React, { memo } from 'react'
import { InputsWrapper } from './style'
import TextField from '@mui/material/TextField'
import { DatePicker } from 'antd'
import { useDispatch } from 'react-redux'
import {
  setWorkExperienceEndTime,
  setWorkExperienceName,
  setWorkExperienceRole,
  setWorkExperienceStartTime
} from '../../../../../../store/modules/resumeInfo'
const { RangePicker } = DatePicker
//这是封装的一个独立组件（简历编辑器上方的三个input=》name,role,time），
//可通过props传入不同的值来实现同一功能
const EditorInputs = memo((props) => {
  const { data, name, role } = props

  const dispatch = useDispatch()
  //dispatch开始时间和结束事件
  const onOk = (value) => {
    // value是一个数组
    dispatch(setWorkExperienceStartTime(value[0]))
    dispatch(setWorkExperienceEndTime(value[1]))
  }
  return (
    <InputsWrapper>
      <TextField
        id="outlined-basic"
        label="经历名称"
        variant="outlined"
        sx={{ marginRight: '10px' }}
        size="small"
        onChange={(e) => dispatch(setWorkExperienceName(e.target.value))}
        defaultValue={name}
      />
      <TextField
        id="outlined-basic"
        label="角色"
        variant="outlined"
        size="small"
        sx={{ marginRight: '10px' }}
        defaultValue={role}
        onChange={(e) => dispatch(setWorkExperienceRole(e.target.value))}
      />
      <RangePicker placeholder={['开始时间', '结束时间']} onOk={onOk} />
    </InputsWrapper>
  )
})

EditorInputs.propTypes = {}

export default EditorInputs
