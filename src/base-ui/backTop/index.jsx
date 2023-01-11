import React from 'react';
import { FloatButton } from 'antd';
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons';
import { BackWrapper } from './style';
const BackTop = () => (
  <BackWrapper>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
      
    </FloatButton.Group>
    <FloatButton.BackTop />
  </BackWrapper>
);
export default BackTop;