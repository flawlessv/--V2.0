import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { InputsWrapper } from './style'
import TextField from '@mui/material/TextField'
import { DatePicker } from 'antd'
import { useDispatch } from 'react-redux'
import { setProjectExperienceName } from '@/store/modules/resumeInfo'
const { RangePicker } = DatePicker
const EditorInputs = memo((props) => {
  const { data } = props

  const dispatch = useDispatch()
  const onOk = (value) => {}
  return (
    <InputsWrapper>
      <TextField
        id="outlined-basic"
        label="经历名称"
        variant="outlined"
        sx={{ marginRight: '10px' }}
        size="small"
        onChange={(e) => dispatch(setProjectExperienceName(e.target.value))}
      />
      <TextField
        id="outlined-basic"
        label="角色"
        variant="outlined"
        size="small"
        sx={{ marginRight: '10px' }}
      />
      <RangePicker
        placeholder={['开始时间', '结束时间']}
        onOk={onOk}
        onChange={(_, dataString) => console.log(dataString)}
      />
    </InputsWrapper>
  )
})

EditorInputs.propTypes = {}

export default EditorInputs
