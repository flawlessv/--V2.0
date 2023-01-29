import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const UserInfo = memo(() => {
    const { basicInfo } = useSelector(state => ({ basicInfo: state.resume.basicInfo }))
    console.log(basicInfo);
    const values = Object.values(basicInfo)
    console.log(values);
    return (
        <div>{
            values.map(item =><span style={{margin:5}} key={item}>{item}</span>)
        }</div>
    )
})

export default UserInfo