import PropTypes from 'prop-types'
import React, { memo, forwardRef, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
const PwdItem = memo(
  forwardRef((props, ref) => {
    const [inputErr, setInputErr] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
    // 设置是否显示密码
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
      event.preventDefault()
    }
    const { label, reg, id } = props
    //表单验证
    const handleCheck = () => {
      const currentValue = ref.current.value
      setInputErr(!reg.test(currentValue))
    }
    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          my: 0
        }}
      >
        {props.children}
        <TextField
          id={id}
          label={label}
          variant="standard"
          error={inputErr}
          inputRef={ref}
          color="secondary"
          type={showPassword ? 'text' : 'password'}
          onBlur={() => handleCheck()}
        />
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          sx={{ position: 'absolute', bottom: 2, right: 10 }}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </Box>
    )
  })
)

PwdItem.propTypes = {
  label: PropTypes.string
}

export default PwdItem
