/**
 * @name useWebSocket
 * @export
 * @param {url} -（必需）ws/wss地址
 * @param {info} -（不必需）socket运行过程中的一些参数，进房参数joinParams，心跳参数heartParams
 * @returns
 * {ws} -socket对象
 * {wsData} -接收的socket消息
 */
import { useEffect, useState, useRef } from 'react'
let lockReconnect = false // 避免重复连接
// const heartCheckSecond = 30 * 1000 // 心跳检测间隔时长

function useSocket(url, info) {
  const [wsData, setWsData] = useState({}) // 接收的消息
  const wsRef = useRef(null)

  useEffect(() => {
    if (!url) return
    createWebSocket()
  }, [url])

  const createWebSocket = () => { // 创建socket连接
    wsRef.current = new WebSocket(url)
    initWebSocket()
  }

  const reconnect = () => { // 创建连接，lockReconnect使当前项目只会存在一个socket
    if (lockReconnect) return
    lockReconnect = true

    setTimeout(function () { // 没连接上会一直重连，设置延迟避免请求过多
      createWebSocket()
      lockReconnect = false
    }, 2000)
  }

  const initWebSocket = () => { // 初始化socket
    wsRef.current.onclose = function (evt) { // 关闭
      console.log('断开连接code:' + evt.code)
      reconnect()
    }

    wsRef.current.onerror = function (evt) { // 连接错误
      console.log('连接失败code:' + evt.code)
      reconnect()
    }

    wsRef.current.onopen = function () {
      var dt = new Date()
      var str = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
      console.log('连接成功:' + str)
      // wsRef.current.send('') // 发起c.jr进房操作
      // heartParams && heartCheck.reset().start()
    }

    wsRef.current.onmessage = function (evt) {
      console.log(evt,'evt');
      var data = JSON.parse(evt.data) // 接收消息string=>json
      setWsData(data)
      // heartParams && heartCheck.reset().start()
    }
  }

  // let heartCheck = { // 心跳检测
  //   timeout: heartCheckSecond,
  //   timeoutObj: null,
  //   serverTimeoutObj: null,
  //   reset: function() {
  //     clearTimeout(this.timeoutObj)
  //     clearTimeout(this.serverTimeoutObj)
  //     return this
  //   },
  //   start: function() {
  //     this.timeoutObj = setTimeout(function() {
  //       // 这里发送一个心跳，后端收到后，返回一个心跳消息，
  //       wsRef.current.send(heartParams)
  //       this.serverTimeoutObj = setTimeout(function() { // 如果超过一定时间还没重置，说明后端主动断开了
  //         wsRef.current.close()
  //       }, this.timeout)
  //     }, this.timeout)
  //   }
  // }

  return [wsRef.current, wsData]
}

export default useSocket
