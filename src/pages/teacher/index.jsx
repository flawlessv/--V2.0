import React, { memo, useState, useEffect } from 'react'
import { Chat, ContactList } from 'react-jwchat'
import { TeacherWrapper } from './style'
import {
  contact as c,
  contactList as cl,
  messageList
} from '@/assets/data/chatData'
import OrderList from '../../components/order-list'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderInfoAction } from '../../store/modules/order'
import useSocket from '../../hooks/useSocket'
import { fakeContactList } from '../../assets/data/chatData'
const ResumeTeacher = memo(() => {
  //记录当前正在聊天规划师的id
  const [sid, setSid] = useState(2)
  //记录当前正在进行的聊天框
  const [contact, setContact] = useState(c)
  //记录当前正在进行的聊天列表
  const [contactList, setContactList] = useState(cl)
  //获取用户信息
  const { userInfo } = useSelector((state) => ({
    userInfo: state.login.userInfo
  }))
  //获取订单信息
  const { orderInfo } = useSelector((state) => ({
    orderInfo: state.order.orderInfo
  }))
  const [chatListData, setChatListData] = useState(messageList)
  //链接websocket
  const [ws, wsData] = useSocket(
    `ws://122.112.178.190:10001/ws?uid=${userInfo.userId}`,
    {
      joinParams: ''
    }
  )
  const dispatch = useDispatch()
  //获取订单数据
  useEffect(() => {
    dispatch(
      fetchOrderInfoAction({
        pageSize: 4,
        userId: userInfo.userId || 2,
        pageNum: 1
      })
    )
  }, [dispatch,userInfo.userId])
  // 获取服务端发送过来的数据
  useEffect(() => {
    console.log('别人发送过来的消息', wsData)
    setChatListData([
      ...chatListData,
      {
        _id: wsData.time,
        date: wsData.time,
        user: {
          id: wsData.sid,
          avatar: contactList[sid]?.avatar,
          nickname: 'sirosong',
          desc: '这是我的第一条信息'
        },
        message: { type: 'text', content: wsData.content }
      }
    ])
  }, [wsData])
  //获取对应订单的聊天列表
  // console.log(contactList, 'contactList')
  useEffect(() => {
    const chatsSet = new Set()
    orderInfo.map((order) => chatsSet.add(order.serveId))
    const chatsArr = [...chatsSet]
    console.log(chatsArr, 'chatsArr')
    //筛选聊天列表
    const newChatList = contactList.filter((chat) => {
      let flag = false
      chatsArr.forEach((item) => {
        if (item === chat.id) {
          flag = true
        }
      })
      return flag
    })
    // console.log(newChatList, 'newChatList')
    setContactList([...newChatList, ...fakeContactList])
  }, [orderInfo,contactList])
  // console.log(newChatList, 'newChatList')
  //处理聊天列表点击
  const handleSelect = (teacher) => {
    console.log(teacher.id)
    setContact(teacher)
    setSid(teacher.id)
    setChatListData([...teacher.msg])
  }
  //发送信息
  const handleSendMessage = (msg) => {
    // 向socket发送消息，格式为string
    const msgData = {
      ...msg.message,
      uid: userInfo.userId, //发送者id
      sid: sid, //接受者id
      type: 0,
      time: Date.now()
    }
    setChatListData([...chatListData, msg])
    // console.log(msgData)
    ws.send(JSON.stringify(msgData))
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
        onSelect={(value) => handleSelect(value)}
      />
      <Chat
        contact={contact}
        me={userInfo}
        chatList={chatListData}
        onSend={(msg) => handleSendMessage(msg)}
        
        style={{
          width: 700,
          height: 600,
          borderRadius: 5
        }}
      />
      {/* {orderInfo[0] && (
        <OrderList data={orderInfo[0]} userId={userInfo.userId||2}></OrderList>
      )} */}

      <OrderList
        data={
          orderInfo[0] || {
            orderId: 0,
            createTime: '2023-5-7',
            remake: '这是订单备注'
          }
        }
        userId={userInfo.userId || 2}
      ></OrderList>
    </TeacherWrapper>
  )
})

export default ResumeTeacher
