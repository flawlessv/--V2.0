import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBasicInfo } from '../../../../../../store/modules/resumeInfo';
import TextField from '@mui/material/TextField';

const TabInput = memo((props) => {
  const { label } = props
  const dispatch = useDispatch()
  const { basicInfo } = useSelector(state => ({ basicInfo: state.resume.basicInfo }))
  const handleInputChange = (e) => {
    console.log(label);
    const value=e.target.value
    dispatch(setBasicInfo({ ...basicInfo, [label]: value }))
  }
  return (
      <TextField
        required
        id="outlined-required"
        label={label}
        // defaultValue="Hello World"
        onChange={(e) => handleInputChange(e)}
      />
  )
})

export default TabInput