import PropTypes from 'prop-types'
import React, { memo, forwardRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { getMobileCode } from '../../../../services';

const MobileLog = memo(forwardRef((props, ref) => {
    const [inputErr, setInputErr] = useState(false)
    const { label, reg, id, btn = false, url = false } = props
    const dispatch = useDispatch()
    //表单验证
    const handleCheck = () => {
        const currentValue = ref.current.value
        setInputErr(!reg.test(currentValue))
    }

    //获取验证码
    const handleGetValidCode = () => {
        
        // axios.get(`/api-send/sms?mobile=${phoneRef.current.value}`).then(res => console.log(res))
        getMobileCode(ref.current.value)
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
            {/* {btn && <Button
                // disabled={validCode}
                onClick={() => handleGetValidCode()}
                sx={{
                    position: 'absolute',
                    top: 86,
                    right: 5,
                    fontSize: '12px'
                }}
            >
                btn</Button>} */}
            
        </Box>
    )
}))

MobileLog.propTypes = {
    label: PropTypes.string
}

export default MobileLog