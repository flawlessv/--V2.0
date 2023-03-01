import React, { memo } from "react";
import useOrder from "../../../../hooks/useOrder";

import { SBannerWrapper } from "./style";

const Sbanner = memo(() => {
  const order = useOrder();

  return (
    <SBannerWrapper>
      <div className="content">
        <div className="s-bannerbg"></div>
        <h2>专业简历服务，让找工作更容易</h2>
        <p className="text2">提供简历优化、简历代写、简历翻译服务</p>
        <p className="text">
          名企HR一对一服务，
          <span>助您斩获高薪offer</span>
        </p>
        <button className="button-82-pushable" onClick={() => order()}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">申请服务</span>
        </button>
      </div>
    </SBannerWrapper>
  );
});

export default Sbanner;
