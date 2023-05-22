import React, { memo, useEffect } from 'react'
import Button from '@mui/material-next/Button'
import Chip from '@mui/material/Chip'
import { HotResumeWrapper } from './style'
import defalutImgUrl from '@/assets/img/template1.png'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import LazyImage from '../../../../../../components/lazy-img'
const HotResume = memo((props) => {
  const { imgUrl = defalutImgUrl } = props
  const tagData = ['6种语言', '封面', '自荐信']
  const imgRef=useRef()

 
  return (
    <HotResumeWrapper url={imgUrl}>
      <div className="hot-content" ref={imgRef}>
        <div className="hot-cover">
          <div className="hot-img"><LazyImage src={imgUrl} alt='hehe'></LazyImage></div>
          
          <div className="hot-cover-mask"></div>
          <Link to="/customized/3">
            <Button
              color="primary"
              size="large"
              variant="filled"
              className="useTemplate"
            >
              立即使用
            </Button>
          </Link>

          <div className="tag-box">
            <div className="tags">
              {tagData.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{ margin: '2px', fontSize: '12px' }}
                  variant="outlined"
                  color="secondary"
                  size="small"
                />
              ))}
            </div>
            <span className="temp-use">24123人使用</span>
          </div>
        </div>
      </div>
    </HotResumeWrapper>
  )
})

export default HotResume
