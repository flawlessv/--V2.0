import React, { memo } from 'react'
import { ResumeHeaderWrapper } from './style'
import { useParams } from 'react-router-dom'

const ResumeHeader = memo(() => {
  const params = useParams()
  console.log()
  return (
    <ResumeHeaderWrapper>
      {params.id === '2' && (
        <div className="resume_head">
          <dl
            id="resumeHead"
            className="left_box"
            style={{ backgroundColor: '#76ba31' }}
          >
            <dt>简历魔法屋</dt>
            <dd>
              <span>Personal resume</span>
              <p>努力超越自己，每天进步一点点</p>
            </dd>
          </dl>
        </div>
      )}
      {params.id === '3' && <div id="resumeHead2">PERSONAL RESUME</div>}
    </ResumeHeaderWrapper>
  )
})

export default ResumeHeader
