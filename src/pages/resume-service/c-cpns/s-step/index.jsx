import React, { memo } from 'react'
import { SstepWrapper } from './style'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { setOrderOpen } from '@/store/modules/order'
import { useDispatch } from 'react-redux'

const Sstep = memo(() => {
  const dispatch = useDispatch()

  const stepData = [
    {
      title: '1、填写信息',
      content: '填写工作年限和订单信息。'
    },
    {
      title: '2、下单支付',
      content: '下单并支付成功。'
    },
    {
      title: '3、匹配专家',
      content: '根据不同行业，匹配最佳HR专家与您联系。'
    },
    {
      title: '4、制作简历',
      content: '3个工作日内完成并交付（可申请加急）。'
    },
    {
      title: '5、验收确认',
      content: '确认完成之后，依然提供7天内免费修改服务。'
    }
  ]
  return (
    <SstepWrapper>
      <div className="content">
        <h3>服务流程</h3>
        <div className="step-list">
          <ul className="liucheng-list">
            {stepData.map((item, index) => (
              <li key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <i>
                  <KeyboardDoubleArrowRightIcon
                    sx={{ display: index === 4 ? 'none' : 'block' }}
                  />
                </i>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="button-82-pushable"
          onClick={() => dispatch(setOrderOpen(true))}
        >
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">申请服务</span>
        </button>
      </div>
    </SstepWrapper>
  )
})

export default Sstep
