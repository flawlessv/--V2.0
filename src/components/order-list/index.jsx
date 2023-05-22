import { List, message, Space } from 'antd'
import React from 'react'
import {
  PayCircleOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import { Form, Input, Modal, } from 'antd'
import { ItemWrapper } from './style'
import { useState } from 'react'
import { patchOrderInfo } from '../../services/modules/order'

//获取订单信息
const OrderList = (props) => {
  const { orderId = '0', createTime = '2023', remake = 'hehe' } = props.data
  const userId = props.userId
  const [open, setOpen] = useState(false)
  const [userAction, setUserAction] = useState('')
  const onCreate = async (values) => {
    console.log('Received values of form: ', values)
    setOpen(false)
    let state = 0
    if (userAction === '存疑?') {
      state = 4
    } else if (userAction === '退款') {
      state = 6
    }
    const patchOrderObj = {
      userId: userId,
      state: state,
      orderId: orderId,
      remake: values[userAction]
    }
    const res = await patchOrderInfo(patchOrderObj)
    if (res.code === 200) {
      message.success(userAction + '成功!!')
    } else {
      message.error(res.msg)
    }
  }
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

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  //处理订单修改事件
  const handleOrderClick = async (e) => {
    console.log(e.target.innerText)
    setUserAction(e.target.innerText)
    setOpen(true)
  }
  //弹出框
  const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm()
    return (
      <Modal
        open={open}
        title="修改订单状态"
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields()
              onCreate(values)
            })
            .catch((info) => {
              console.log('Validate Failed:', info)
            })
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public'
          }}
        >
          <Form.Item
            name={userAction}
            label={'请输入您的' + userAction + '理由'}
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
  return (
    <>
      <List
        itemLayout="vertical"
        size="small"
        dataSource={data}
        style={{ background: '#fff', height: 600, marginLeft: 5 }}
        renderItem={(item) => (
          <List.Item
            style={{ cursor: 'pointer' }}
            key={item.title}
            onClick={(value) => {
              handleOrderClick(value)
            }}
            actions={[
              <IconText
                icon={QuestionCircleOutlined}
                text="存疑？"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="评价"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={PayCircleOutlined}
                text="退款"
                key="list-vertical-message"
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
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}
export default OrderList
