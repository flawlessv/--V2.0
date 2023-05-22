import React, { memo, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { convertToRaw, EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import { TabEditorWrapper } from './style'
import { useDispatch } from 'react-redux'
const TabEditor = memo((props) => {
  const { fn } = props
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const dispatch = useDispatch()
  const handleResumeEditorContent = (value) => {
    dispatch(fn(value))
  }
  return (
    <TabEditorWrapper>
      <div className="reEditor">
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          editorState={editorState}
          defaultContentState={'qweqeqweqwe'}
          onEditorStateChange={(val) => setEditorState(val)}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true }
          }}
          // 失去焦点之后，就能够获取到转化成HTML的数据
          onBlur={() =>
            handleResumeEditorContent(
              draftToHtml(convertToRaw(editorState.getCurrentContent()))
            )
          }
        />
      </div>
    </TabEditorWrapper>
  )
})

export default TabEditor
