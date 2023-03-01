import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DatePicker } from 'antd';
import './index.css'
const TabDate = memo((props) => {
    const onChange = (date, dateString) => {
    };
  return (
    <DatePicker onChange={onChange} placeholder="入职时间" className='datePicker'/>
  )
})

TabDate.propTypes = {}

export default TabDate