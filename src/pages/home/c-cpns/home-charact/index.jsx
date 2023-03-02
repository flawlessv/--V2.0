import React, { memo } from 'react'
import { HomeCharactWrapper } from './style'

const HomeCharact = memo((props) => {
  const {
    cData: { title, subtitle, element }
  } = props
  return (
    <HomeCharactWrapper>
      <div className="HomeCharact-content">
        <div className="charact-icon">{element}</div>
        <h4 className="charact-title">{title}</h4>
        <p className="charact-subtitle">{subtitle}</p>
      </div>
    </HomeCharactWrapper>
  )
})

export default HomeCharact
