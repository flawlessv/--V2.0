import PropTypes from 'prop-types'
import React, { memo, forwardRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const InputItem = memo(forwardRef((props, ref) => {
    const [inputErr, setInputErr] = useState(false)
    const { label, reg, id, btn = false, url = false } = props
    //表单验证
    const handleCheck = () => {
        const currentValue = ref.current.value
        setInputErr(!reg.test(currentValue))
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 0 }}>
            {props.children}
            <TextField
                id={id}
                label={label}
                variant="standard"
                error={inputErr}
                inputRef={ref}
                onBlur={() => handleCheck()}
            />
            {btn && <Button
                // disabled={validCode}
                // onClick={() => handleGetValidCode()}
                sx={{
                    position: 'absolute',
                    top: 86,
                    right: 5,
                    fontSize: '12px'
                }}
            >
                {/* {validCode ? `${messageTime}后重新获取` : '获取验证码'} */}
                btn</Button>}
            {url && <img src={url} alt="图片验证码" className='codeImg' />}
        </Box>
    )
}))

InputItem.propTypes = {
    label: PropTypes.string
}

export default InputItem