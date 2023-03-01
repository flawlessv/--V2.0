import React, { memo } from "react";
import { HelperWrapper } from "./style";
import { Card } from "antd";
const ResumeHelpOpt = memo(() => {
  return (
    <HelperWrapper>
      {/* 简历规划师 */}
      <Card
        title="简历助手,让求职更容易"
        extra={<a href="/">More</a>}
        style={{
          width: 300,
          height: 200,
        }}
      >
        <div style={{ display: "flex", marginTop: 20 }}>
          <button className="diagnose"> 诊断简历</button>
          <button className="optimize">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <span>优化简历</span>
          </button>
        </div>
        <div  className="card">
          <div  className="header">常见问题</div>
          <div  className="body">
            <div  className="skill">1:简历怎么保存？</div>
            <div  className="skill">2:怎么下载 / 导出简历？</div>
            <div  className="skill">3:怎么隐藏不需要的模块？</div>
            <div  className="skill">4:隐藏模块怎么显示出来？</div>
            <div  className="skill">5:模块顺序怎么调整？</div>
          </div>
        </div>
      </Card>
    </HelperWrapper>
  );
});

export default ResumeHelpOpt;
