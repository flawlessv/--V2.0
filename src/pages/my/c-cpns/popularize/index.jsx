import React, { memo } from 'react'
import { Button, Form, Input, message } from 'antd'
import { useEffect } from 'react'
import { uploadTemplate } from '../../../../services/modules/order'
import { UploadWrapper } from './style'
import { nanoid } from 'nanoid'
const UploadTemplate = memo(() => {
  useEffect(() => {
    uploadTemplate().then((res) => {
      console.log(res)
    })
  }, [])
  const data = [
    'baseInfoCss',
    'baseInfoHtml',
    'campusExperienceCss',
    'campusExperienceHtml',
    'certificateHonorCss',
    'certificateHonorHtml',
    'hobbiesCss',
    'hobbiesHtml',
    'jobIntentCss',
    'jobIntentHtml',
    'projectExperienceCss',
    'projectExperienceHtml',
    'selfEvaluationCss',
    'selfEvaluationHtml',
    'skillSpecialtiesCss',
    'skillSpecialtiesHtml',
    'workExperienceCss',
    'workExperienceHtml'
  ]
  const onFinish = (values) => {
    const templateData=JSON.stringify({...values,createById:Math.floor(Math.random()),createTime:new Date().getTime()})
    console.log(templateData);
    uploadTemplate(templateData).then(res=>{
      if(res.code===200){
        message.success('上传成功！')
      }else{
        message.error(res.msg)
      }
    })
  }
  return (
    <UploadWrapper>
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
        onFinish={onFinish}
        colon={false}
        style={{
          maxWidth: 600
        }}
      >
        <Form.Item
          label="模板名称"
          name="title"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="模板类型"
          name="type"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        {data.map((item) => (
          <Form.Item
            label={item}
            name={item}
            key={item}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
        ))}

        <Form.Item label="">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </UploadWrapper>
  )
})

export default UploadTemplate
