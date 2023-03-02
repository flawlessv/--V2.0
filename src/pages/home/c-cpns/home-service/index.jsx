import React, { memo } from 'react'
import { ServiceWrapper } from './style'
import ServiceSetion from '@/components/serviceSetion'
import serviceData from '@/assets/data/resumeService'
const HomeService = memo(() => {
  return (
    <ServiceWrapper>
      {serviceData.map((item, index) => (
        <ServiceSetion
          key={item.title}
          data={item}
          setionIndex={index}
        ></ServiceSetion>
      ))}
    </ServiceWrapper>
  )
})

export default HomeService
