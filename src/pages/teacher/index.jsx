import React, { memo, useState, useEffect } from 'react'
import { Chat, ContactList } from 'react-jwchat'
import { TeacherWrapper } from './style'
import { contact, contactList, messageList } from '@/assets/data/chatData'
import OrderList from '../../components/order-list'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderInfoAction } from '../../store/modules/order'
import useSocket from '../../hooks/useSocket'
const ResumeTeacher = memo(() => {
  //获取用户信息
  const { userInfo } = useSelector((state) => ({
    userInfo: state.code.userInfo
  }))
  const { orderInfo } = useSelector((state) => ({
    orderInfo: state.order.orderInfo
  }))
  const [chatListData, setChatListData] = useState(messageList)
  const [ws, wsData] = useSocket(
    `ws://122.112.178.190:10001/ws?uid=${userInfo.userId}`,
    {
      joinParams: ''
    }
  )
  const dispatch = useDispatch()
  //获取订单数据
  useEffect(() => {
    dispatch(fetchOrderInfoAction({ pageSize: 4, userId: 7, pageNum: 1 }))
  }, [dispatch])
  //获取服务端发送过来的数据
  useEffect(() => {
    console.log('webSocket message:', wsData)
  }, [wsData])

  const handleSendMessage = (msg) => {
    // 向socket发送消息，格式为string
    const msgData = {
      ...msg.message,
      uid: userInfo.userId, //发送者id
      sid: '2', //接受者id
      type: 0,
      time: Date.now()
    }
    console.log(msgData)
    console.log(msg, 'msg')
    setChatListData([...chatListData, msg])
    ws.send(msg)
  }
  return (
    <TeacherWrapper>
      <ContactList
        data={contactList}
        style={{
          marginRight: 10,
          height: 600,
          borderRadius: 5,
          overflow: 'hidden',
          width: 240
        }}
      />
      <Chat
        contact={contact}
        me={userInfo}
        chatList={chatListData}
        onSend={(msg) => handleSendMessage(msg)}
        onEarlier={() => console.log('EarlierEarlier')}
        style={{
          width: 700,
          height: 600,
          borderRadius: 5
        }}
      />
      {orderInfo[0] && <OrderList data={orderInfo[0]}></OrderList>}
    </TeacherWrapper>
  )
})

export default ResumeTeacher
