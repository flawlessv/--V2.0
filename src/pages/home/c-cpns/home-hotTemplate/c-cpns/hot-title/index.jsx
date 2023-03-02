import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { styled } from '@mui/material/styles'
const HotTitle = memo((props) => {
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    padding: theme.spacing(1)
  }))

  return <Div>{'高薪简历模板推荐'}</Div>
})

HotTitle.propTypes = {}

export default HotTitle
