import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBaseInfo, setJobIntent } from '@/store/modules/resumeInfo'
import TextField from '@mui/material/TextField'
const TabInput = memo((props) => {
  const {
    data: { label, name },
    isIntent = false
  } = props
  const dispatch = useDispatch()
  const { baseInfo, jobIntent } = useSelector((state) => ({
    baseInfo: state.resume.resumeData.baseInfo,
    jobIntent: state.resume.resumeData.jobIntent
  }))
  const handleInputChange = (e) => {
    const value = e.target.value
    isIntent
      ? dispatch(setJobIntent({ ...jobIntent, [name]: value }))
      : dispatch(setBaseInfo({ ...baseInfo, [name]: value }))
  }
  return (
    <TextField
      required
      id="outlined-required"
      label={label}
      type={name === 'age' ? 'number' : name}
      defaultValue={label.defaultValue || ''}
      InputProps={
        {
          // endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }
      }
      size="small"
      onChange={(e) => handleInputChange(e)}
      sx={{ margin: 1 }}
    />
  )
})

export default TabInput
