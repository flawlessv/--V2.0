import { List, Space } from 'antd'
import React from 'react'
import {
  DislikeOutlined,
  LikeOutlined,
  MessageOutlined
} from '@ant-design/icons'

import { ItemWrapper } from './style'

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)
//获取订单信息
const OrderList = (props) => {

  const { orderId = '0', createTime = '2023', remake = 'hehe' } = props
  const data = [
    {
      href: 'https://ant.design',
      title: `订单信息`,
      avatar: `https://joesch.moe/api/v1/random?key=${1}`,
      orderId,
      createTime,
      remake,
      content: '你可以在这里对简历规划师作出评价 收藏 或投诉'
    }
  ]

  return (
    <List
      itemLayout="vertical"
      size="small"
      dataSource={data}
      style={{ background: '#fff', height: 600, marginLeft: 5 }}
      renderItem={(item) => (
        <List.Item
        style={{cursor:"pointer"}}
          key={item.title}
          actions={[
            <IconText
              icon={LikeOutlined}
              text="点赞-156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="评价-2"
              key="list-vertical-message"
            />,
            <IconText
              icon={DislikeOutlined}
              text="投诉"
              key="list-vertical-star-o"
            />
          ]}
        >
          <List.Item.Meta
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          <ItemWrapper>
            <div className="order-item">订单id：{item.orderId}</div>
            <div className="order-item">订单创建时间：{item.createTime}</div>
            <div className="order-item">订单备注：{item.remake}</div>
            <div className="order-item">{item.content}</div>
          </ItemWrapper>
        </List.Item>
      )}
    />
  )
}
export default OrderList
