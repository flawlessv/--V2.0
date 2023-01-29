import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import Button from '@mui/material/Button';
import TabInput from '../tab-input'
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicInfo } from '@/store/modules/resumeInfo';
import { useRef } from 'react';
const BasicInfoTab = memo((props) => {
    const [BasicInfoTabDataSource, setBasicInfoTabDataSource] = useState(['name', 'gender', 'phone', 'email', 'birthday'])
    const dispatch = useDispatch()
    const labelRef = useRef()
    const valueRef = useRef()
    const { basicInfo } = useSelector(state => ({ basicInfo: state.resume.basicInfo }))
    const addExtraBasicInfo = () => {
        const label = labelRef.current.value
        const value = valueRef.current.value
        console.log(123);
        setBasicInfoTabDataSource([...BasicInfoTabDataSource, label])
        dispatch(setBasicInfo({ ...basicInfo, [label]: value }))
    }
    return (
        <div>
            {
                BasicInfoTabDataSource.map(item => <TabInput label={item} key={item}></TabInput>)
            }
            <div>
                <Input placeholder="信息名称" inputRef={labelRef} />
                <Input placeholder="信息内容" inputRef={valueRef} />
                <Button variant="outlined" startIcon={<AddIcon />} onClick={addExtraBasicInfo}>
                    add
                </Button>
            </div>
        </div>
    )
})

BasicInfoTab.propTypes = {}

export default BasicInfoTab