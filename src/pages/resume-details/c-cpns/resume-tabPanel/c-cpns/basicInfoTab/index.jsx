import React, { memo, useState } from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TabInput from '../tab-input'
import AddIcon from '@mui/icons-material/Add'
import Input from '@mui/material/Input'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '@mui/material/Divider'
import { useRef } from 'react'
import { BasicInfoTabWrapper } from './style'
// 个人基本信息组件
const BasicInfoTab = memo((props) => {
  const data = [
    {
      name: 'name',
      label: '姓名',
      isExtra: false
    },
    {
      name: 'sex',
      label: '性別',
      isExtra: false
    },
    {
      name: 'birthday',
      label: '年龄',
      isExtra: false
    },
    {
      name: 'telephone',
      label: '手机号',
      isExtra: false
    },
    {
      name: 'email',
      label: '邮箱',
      isExtra: false
    },
    {
      name: 'workYear',
      label: '工作年限',
      isExtra: false
    },
    {
      name: 'imgUrl',
      label: '照片',
      isExtra: false
    },
    {
      name: 'politicalLandscape',
      label: '政治面貌',
      isExtra: false
    },
    {
      name: 'origin',
      label: '目前所在地',
      isExtra: false
    },
    {
      name: 'ethnic',
      label: '民族',
      isExtra: false
    },
    {
      name: 'height',
      label: '身高',
      isExtra: false
    },
    {
      name: 'weight',
      label: '体重',
      isExtra: false
    }
  ]
  const [BasicInfoTabDataSource, setBasicInfoTabDataSource] = useState(data)
  const [newTabDataSource, setNewTabDataSource] = useState([])
  const dispatch = useDispatch()
  const labelRef = useRef()
  const valueRef = useRef()
  const { baseInfo } = useSelector((state) => ({
    baseInfo: state.resume.resumeData.baseInfo
  }))
  //新增自定义个人信息
  const addExtraBasicInfo = () => {
    const label = labelRef.current.value
    const value = valueRef.current.value
    const newData = {
      name: label,
      label,
      defaultValue: value,
      isExtra: true
    }
    // setBasicInfoTabDataSource([...BasicInfoTabDataSource,newData ])
    setNewTabDataSource([...newTabDataSource, newData])
    // dispatch(setBasicInfo({ ...baseInfo, [label]: value }))
  }
  // 删除新增信息
  const deleteExtraBasicInfo = (name) => {
    const newData = newTabDataSource?.filter((item) => item.name !== name)
    setNewTabDataSource(newData)
  }
  return (
    <BasicInfoTabWrapper>
      {/* 原有的基本信息 */}
      <div className="baseInfo">
        {BasicInfoTabDataSource.map((item) => (
          <TabInput data={item} key={item.name}></TabInput>
        ))}
      </div>
      <Divider />

      {/* 自定义新增的基本信息 */}
      <div className="addInfoContentBox">
        {newTabDataSource.map((item) => (
          <div key={item.name} className="addInfoContent">
            <TabInput label={item}></TabInput>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={() => deleteExtraBasicInfo(item.name)}
            >
              <DeleteForeverIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <Divider />
      <div className="addInfoForm">
        <h4>新增自定义信息</h4>
        <Input
          placeholder="信息名称"
          inputRef={labelRef}
          className="addInput"
        />
        <Input placeholder="信息内容" inputRef={valueRef} />
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={addExtraBasicInfo}
        >
          add
        </Button>
      </div>
    </BasicInfoTabWrapper>
  )
})

BasicInfoTab.propTypes = {}

export default BasicInfoTab
