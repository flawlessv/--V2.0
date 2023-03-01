import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import HotResume from "./c-cpns/hot-resume";
import { HotTemplateWrapper } from "./style";

const HotTemplate = memo((props) => {
  const navigate=useNavigate()
  return (
    <HotTemplateWrapper>
      <div>
        {/* <HotTitle /> */}
        <div className="hotTitle">
          <h3>高薪简历模板推荐</h3>
          <p>12种颜色任意调配，12种模块自由组合，6种语言可选</p>
        </div>
        <div className="re-template">
          <HotResume></HotResume>
          <HotResume></HotResume>
          <HotResume></HotResume>
          <HotResume></HotResume>
          <HotResume></HotResume>
          <HotResume></HotResume>
          <HotResume></HotResume>
          <HotResume></HotResume>
          <button alt="更多模板 立即使用" className="rt-bun" onClick={()=>navigate('/resumes')}>
            <i>更</i>
            <i>多</i>
            <i>模</i>
            <i>版</i>
            <i>&nbsp;</i>
            <i>立</i>
            <i>即</i>
            <i>使</i>
            <i>用</i>
          </button>
        </div>
      </div>
    </HotTemplateWrapper>
  );
});

HotTemplate.propTypes = {};

export default HotTemplate;
