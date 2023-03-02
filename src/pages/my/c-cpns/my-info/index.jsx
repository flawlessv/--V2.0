import React, { memo } from 'react'
import { MyInfoWrapper } from './style'
import { UserOutlined } from '@ant-design/icons'
import { Card, Button, Descriptions } from 'antd'
import { Avatar } from 'antd'
import { useSelector } from 'react-redux'
const MyInfo = memo(() => {
  const {
    userInfo: { avatar, tenantId, roleId, userId, userName }
  } = useSelector((state) => ({
    userInfo: state.code.userInfo
  }))
  return (
    <MyInfoWrapper>
      <Card
        title="基本信息"
        bordered={false}
        style={{
          width: 1050,
          height: 200
        }}
      >
        <div className="my-info">
          <Avatar size={64} icon={<UserOutlined />} />
          <div className="info">
            <div className="username">用户名:{userName}</div>
            <div className="userID">用户ID:{userId}</div>
            <div className="userType">
              用户角色:{roleId === 1 ? '超级用户' : '普通用户'}
              <Button type="primary" className="vipbtn">
                成为会员
              </Button>
            </div>
          </div>
        </div>
      </Card>
      {/* //描述 */}
      <Descriptions
        title="User Info"
        style={{
          padding: '20px'
        }}
      >
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="手机号">1810000000</Descriptions.Item>
        <Descriptions.Item label="居住地">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
    </MyInfoWrapper>
  )
})

export default MyInfo
