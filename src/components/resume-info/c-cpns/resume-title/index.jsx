import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { TitleWrapper } from './style'

const ResumeTitle = memo((props) => {
  const { title } = props
  return (
    <TitleWrapper>
      <span>{title}</span>
    </TitleWrapper>
  )
})

ResumeTitle.propTypes = {}

export default ResumeTitle
