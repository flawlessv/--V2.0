// import react, react-markdown-editor-lite, and a markdown parser you like
import React, { useState } from 'react'
import * as ReactDOM from 'react-dom'
import MarkdownIt from 'markdown-it'
import html2markdown from 'html2markdown'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { TabEditorWrapper } from './style'

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */)

// Finish!

const ResumeEdtior = (props) => {
  //获取dispat对应的函数
  const { fn, label } = props
  const dispatch=useDispatch()
  //获取默认展示的编辑器内容
  const { resumeData } = useSelector((state) => ({
    resumeData: state.resume.resumeData
  }))
  const [currentContent,setCurrentContent]=useState(resumeData)

  //编辑器的change事件
  function handleEditorChange({ html, text }) {
    setCurrentContent(html)
  }
  //设置编辑器内默认内容
  const defaultContent=(label==='campusExperience'||label==='projectExperience'||label==='workExperience')?html2markdown(resumeData[label].content):html2markdown(resumeData[label])
  //失去焦点后dispatch方法
  const handleResumeEditorContent = () => {
    dispatch(fn(currentContent))
  }
  return (
   <TabEditorWrapper>
     <MdEditor
      style={{ height: '500px' }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
      defaultValue={defaultContent}
      onBlur={()=>handleResumeEditorContent()}
    />
   </TabEditorWrapper>
  )
}
export default ResumeEdtior
