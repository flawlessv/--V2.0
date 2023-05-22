import React, { memo, useEffect, useState } from 'react'
import { Card, Space, Table, Tag } from 'antd'
import { fetchOrderInfoAction } from '../../../../store/modules/order'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Input, Modal, Select, message, Popconfirm } from 'antd'
import { deleteOrder, patchOrderInfo } from '../../../../services/modules/order'
//修改订单对话框
const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      open={open}
      title="修改订单信息"
      okText="修改"
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
          name="serveType"
          label="服务类型"
          rules={[
            {
              required: true,
              message: '请输入要修改的服务类型!'
            }
          ]}
        >
          <Select
            // defaultValue="普通服务"
            style={{ width: '100%' }}
            options={[
              { value: 0, label: '普通服务' },
              { value: 1, label: '特殊服务' },
              { value: 2, label: '终极服务' }
            ]}
          />
        </Form.Item>
        <Form.Item
          name="serveId"
          label="服务类型"
          rules={[
            {
              required: true,
              message: '请输入要修改的简历服务师!'
            }
          ]}
        >
          <Select
            // initialvalue={"马化腾"}
            style={{ width: '100%' }}
            options={[
              { value: 0, label: '马化腾' },
              { value: 1, label: '奥特曼' },
              { value: 2, label: '郭猛' }
            ]}
          />
        </Form.Item>
        <Form.Item name="remake" label="订单备注">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  )
}
const MyOrder = memo(() => {
  const [open, setOpen] = useState(false)
  const [currentid, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => ({
    userInfo: state.login.userInfo
  }))
  // 获取订单数据
  useEffect(() => {
    dispatch(
      fetchOrderInfoAction({
        pageSize: 4,
        userId: userInfo.userId || 2,
        pageNum: 1
      })
    )
  }, [dispatch])
  const { orderInfo, orderTotal } = useSelector((state) => ({
    orderInfo: state.order.orderInfo,
    orderTotal: state.order.orderTotal
  }))
  const orderState = [
    '派单中',
    '已接单',
    '',
    '已完成',
    '存疑',
    '已取消',
    '退款中'
  ]
  const myData = orderInfo.map((item, index) => ({
    ...item,
    key: index + 1,
    tag: orderState[item.state],
    serveType: item.serveType === 0 ? '普通服务' : '特殊服务'
  }))
  //  处理订单分页
  const handlePagination = (values) => {
    dispatch(fetchOrderInfoAction({ pageSize: 4, userId: 7, pageNum: values }))
    console.log(values)
  }
  // 修改订单信息的函数
  const handleChangeOrder = (orderId) => {
    setCurrentId(orderId)
    setOpen(true)
  }
  //删除订单
  const handleDeleteOrder = async (orderId) => {
    const res = await deleteOrder(orderId)
    if (res.code === 200) {
      message.success(res.msg)
      dispatch(fetchOrderInfoAction(123))
    } else {
      cancel()
    }
  }
  //提交表单函数
  const onCreate = async (values) => {
    // 设置新的订单数据
    const newOrderInfo = orderInfo.filter((item) => item.orderId === currentid)
    // 发送网络请求
    const res = await patchOrderInfo({ ...newOrderInfo[0], ...values })
    if (res.code === 200) {
      message.success(res.msg)
    } else {
      message.error(res.msg)
    }
    dispatch(fetchOrderInfoAction('修改'))
    setOpen(false)
  }

  const cancel = (e) => {
    message.error('删除失败')
  }
  //表格数据

  const columns = [
    {
      title: '订单名称',
      dataIndex: 'serveType',
      key: 'serveType',
      render: (text) => <span>{text}</span>
    },
    {
      title: '价格',
      dataIndex: 'integral',
      key: 'integral'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: '订单备注',
      dataIndex: 'remake',
      key: 'remake'
    },
    {
      title: '订单状态',
      key: 'tag',
      dataIndex: 'tag',
      render: (_, { tag }) => (
        <>
          <Tag color={tag === '派单中' ? 'green' : 'volcano'} key={tag}>
            {tag}
          </Tag>
        </>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => handleChangeOrder(record.orderId)}
          >
            修改订单
          </Button>
          <Popconfirm
            title="删除订单"
            description="你确定要删除这个订单吗?"
            onConfirm={() => handleDeleteOrder(record.orderId)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              删除订单
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ]

  return (
    <div>
      <Card
        title="我的订单"
        bordered={false}
        style={{
          width: 1050,
          height: 500
        }}
      >
        <Table
          columns={columns}
          dataSource={myData}
          pagination={{
            total: orderTotal,
            defaultPageSize: 4,
            onChange: handlePagination
          }}
        />
      </Card>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </div>
  )
})

export default MyOrder
