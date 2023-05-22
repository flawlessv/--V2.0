import PropTypes from 'prop-types'
import React, { memo, forwardRef, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useDispatch } from 'react-redux'
import { fetchCodeUrlAction } from '../../../../store/modules/login'

const InputItem = memo(
  forwardRef((props, ref) => {
    const [inputErr, setInputErr] = useState(false)
    const { label, reg, id, url = '' } = props
    const dispatch = useDispatch()
    //表单验证
    const handleCheck = () => {
      const currentValue = ref.current.value
      setInputErr(!reg.test(currentValue))
    }
    // 刷新图片验证码
    const refreshImgCode = () => {
      dispatch(fetchCodeUrlAction())
    }
    return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 0 }}>
        {props.children}
        <TextField
          id={id}
          label={label}
          variant="standard"
          error={inputErr}
          color="secondary"
          inputRef={ref}
          onBlur={() => handleCheck()}
        />
        {url && (
          <img
            src={url}
            alt="图片验证码"
            className="codeImg"
            onClick={refreshImgCode}
          />
        )}
      </Box>
    )
  })
)

InputItem.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  url: PropTypes.string
}

export default InputItem
