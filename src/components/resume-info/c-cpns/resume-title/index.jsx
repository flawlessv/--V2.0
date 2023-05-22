import React, { memo } from 'react'
import { TitleWrapper } from './style'
import { useParams } from 'react-router-dom'
const ResumeTitle = memo((props) => {
  const { title } = props
  const params = useParams()
  return (
    <TitleWrapper templateId={params.id}>
      <div className={params.id === '2' ? 'kit' : ''}>
        {params.id === '2' && <i>{title}</i>}
        {params.id === '1' && <span>{title}</span>}
        {params.id === '2' && (
          <dfn style={{ borderTopColor: 'rgb(88,156,19)' }}></dfn>
        )}
        {params.id === '3' && (
          <div className="module_tit">
            <span>{title}</span>
          </div>
        )}
      </div>
    </TitleWrapper>
  )
})

ResumeTitle.propTypes = {}

export default ResumeTitle
