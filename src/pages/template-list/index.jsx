import React, { memo, useState } from 'react'
import { TlistWrapper } from './style'
import {
  SettingOutlined,
  AppstoreOutlined,
  ChromeOutlined,
  CodepenOutlined,
  DribbbleSquareOutlined,
  AlibabaOutlined,
  BarcodeOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import HotResume from '../home/c-cpns/home-hotTemplate/c-cpns/hot-resume'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}
const items = [
  getItem('模板风格', 'templateStyle', <AppstoreOutlined />, [
    getItem('热门', 'hotImgData', <ChromeOutlined />),
    getItem('英文模板', 'englishImgData', <CodepenOutlined />),
    getItem('应届生', 'freshmenImgData', <DribbbleSquareOutlined />),
    getItem('考研模板', 'fuckeyes', <AlibabaOutlined />),
    getItem('大三实习', 'dasanshixi', <BarcodeOutlined />)
  ]),
  {
    type: 'divider'
  },
  getItem('岗位分类', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),
  getItem(
    'Group',
    'grp',
    null,
    [getItem('Option 13', '13'), getItem('Option 14', '14')],
    'group'
  )
]
const templateImgData = {
  hotImgData: [
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/2f029960-0cca-11ed-9a94-fbf670c84a99.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/62bbdda0-7745-11eb-ad36-79c362d00236.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/418/%E9%AB%98%E7%9B%9B%E9%9B%86%E5%9B%A2_%E5%AE%9E%E4%B9%A0%E7%94%9F_0001.Jpeg?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/fe700260-e885-11eb-af58-2588e7103b9f.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/6a7396d0-66c6-11eb-a657-43e479e8f513.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/2492/%E4%BA%92%E8%81%94%E7%BD%91%E6%98%A5%E6%8B%9B%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_0001.Jpeg?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/6a7396d0-66c6-11eb-a657-43e479e8f513.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/2492/%E4%BA%92%E8%81%94%E7%BD%91%E6%98%A5%E6%8B%9B%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_0001.Jpeg?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100'
  ],
  dasanshixi: [
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/2f029960-0cca-11ed-9a94-fbf670c84a99.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/62bbdda0-7745-11eb-ad36-79c362d00236.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/418/%E9%AB%98%E7%9B%9B%E9%9B%86%E5%9B%A2_%E5%AE%9E%E4%B9%A0%E7%94%9F_0001.Jpeg?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/fe700260-e885-11eb-af58-2588e7103b9f.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/6a7396d0-66c6-11eb-a657-43e479e8f513.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/2492/%E4%BA%92%E8%81%94%E7%BD%91%E6%98%A5%E6%8B%9B%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_0001.Jpeg?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/6a7396d0-66c6-11eb-a657-43e479e8f513.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/2492/%E4%BA%92%E8%81%94%E7%BD%91%E6%98%A5%E6%8B%9B%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_0001.Jpeg?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100'
  ],
  freshmenImgData: [
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/1673a840-f433-11eb-b36c-894414ff3374.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/a44ebcf0-f775-11eb-8a40-73aa39e09948.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/62bbdda0-7745-11eb-ad36-79c362d00236.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/197f7930-4918-11ec-935d-893b20d05390.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/e5107970-75b3-11eb-b3c2-a9de1a25c4d4.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/fe700260-e885-11eb-af58-2588e7103b9f.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/e5107970-75b3-11eb-b3c2-a9de1a25c4d4.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/fe700260-e885-11eb-af58-2588e7103b9f.png?imageMogr2/auto-orient/thumbnail/560x792/interlace/1/blur/1x0/quality/100'
  ],
  englishImgData: [
    'https://photo.wondercv.com/uploads/jianlimuban/img/13/%E8%8B%B1%E6%96%87%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_%E9%80%9A%E7%94%A8_.jpg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/102/%E5%95%86%E7%A7%91%E8%8B%B1%E6%96%87%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF.jpg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/44/%E8%8B%B1%E6%96%87%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_%E6%8A%95%E8%A1%8C%E7%B1%BB_.jpg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/15/%E8%8B%B1%E6%96%87%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E8%8C%83%E6%96%87_%E5%A4%96%E4%BC%81%E5%AE%9E%E4%B9%A0_.jpg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/15/%E8%8B%B1%E6%96%87%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF%E8%8C%83%E6%96%87_%E5%A4%96%E4%BC%81%E5%AE%9E%E4%B9%A0_.jpg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/46/Wharton_MBA_Resumes_2003-103_page-0001.jpg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100'
  ],
  fuckeyes: [
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/c7847e90-7745-11eb-ad36-79c362d00236.png?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/2491/%E8%80%83%E7%A0%94%E5%A4%8D%E8%AF%95%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_0001.Jpeg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/55e49c30-66c8-11eb-a0ad-6fec8279f3e7.png?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://prod-file-uploaded.oss-cn-beijing.aliyuncs.com/template_resumes/091ef180-66c7-11eb-a0ad-6fec8279f3e7.png?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100',
    'https://photo.wondercv.com/uploads/jianlimuban/img/101/%E6%8E%A8%E5%85%8D%E7%A0%94%E7%A9%B6%E7%94%9F%E7%AE%80%E5%8E%86%E6%A8%A1%E6%9D%BF_page-0001.jpg?imageMogr2/auto-orient/thumbnail/236x352/interlace/1/blur/1x0/quality/100'
  ]
}

const TemplateList = memo(() => {
  const [imgData, setImgData] = useState(templateImgData['hotImgData'])
  const onClick = (e) => {
    setImgData(templateImgData[e.key])
  }

  return (
    <TlistWrapper>
      <Menu
        onClick={onClick}
        style={{
          width: 200,
          height: '120vh',
          paddingTop: 50
        }}
        defaultSelectedKeys={['hot']}
        defaultOpenKeys={['templateStyle']}
        mode="inline"
        items={items}
      />
      <div className="templates">
        {imgData.map((item, index) => (
          <HotResume imgUrl={item} key={index}></HotResume>
        ))}
      </div>
    </TlistWrapper>
  )
})

export default TemplateList
