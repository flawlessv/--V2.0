import React, { memo } from "react";
import { HelperWrapper } from "./style";

const ResumeHelper = memo(() => {
  return (
    <HelperWrapper>
        {/* 简历规划师 */}
      <div className="card">
        <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <h1>简历规划师</h1>
        <p>
        专业简历服务，让找工作更容易.
        名企HR一对一服务，助您斩获高薪offer
        </p>
      </div>
    </HelperWrapper>
  );
});

export default ResumeHelper;
