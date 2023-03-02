import hyRequest from '..'
// 獲取簡歷內容
export const getResumeContent = () => {
  return hyRequest.get({
    url: '/resume-serve/resume',
    params: {
      current: 1,
      size: 1,
      createById: 7
    }
  })
}
// 设置简历内容
export const setResumeInfo = (value, createTime = '2023-1-1') => {
  return hyRequest.post({
    url: '/resume-serve/resume',
    data: {
      ...value,
      createId: 7,
      id: 7,
      templateId: 7,
      createTime
    }
  })
}
