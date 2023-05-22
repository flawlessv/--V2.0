import React, { memo } from 'react'
import { Button, Form, Input } from 'antd'
const UploadTemplate = memo(() => {
  return (
    <div>
      <Form
        name="wrap"
        labelCol={{
          flex: '110px'
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1
        }}
        colon={false}
        style={{
          maxWidth: 600
        }}
      >
        <Form.Item
          label="正常标签文案"
          name="username"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="超长标签文案超长标签文案"
          name="password"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export default UploadTemplate
