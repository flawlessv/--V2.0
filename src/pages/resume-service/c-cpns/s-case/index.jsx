import React, { memo } from "react";
import { ScaseWrapper } from "./style";

import img1 from "../../../../assets/img/demo1-1.png";
import img2 from "../../../../assets/img/demo1-2.png";
import img3 from "../../../../assets/img/demo2-1.png";
import img4 from "../../../../assets/img/demo2-2.png";
import useOrder from "../../../../hooks/useOrder";
const Scase = memo(() => {
  const order = useOrder();
  return (
    <ScaseWrapper>
      <div className="content">
        <h3>简历制作/优化案例</h3>
        <ul className="anli_list">
          <li>
            <div className="demo_box">
              <img src={img1} alt="" />
              <h4>优化前</h4>
            </div>
            <div className="demo_box">
              <img src={img2} alt="" />
              <h4 className="youhua">优化后</h4>
            </div>
          </li>
          <li>
            <div className="demo_box">
              <img src={img3} alt="" />
              <h4>优化前</h4>
            </div>
            <div className="demo_box">
              <img src={img4} alt="" />
              <h4 className="youhua">优化后</h4>
            </div>
          </li>
        </ul>
        <button className="button-82-pushable" onClick={() => order()}>
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">申请服务</span>
        </button>
      </div>
    </ScaseWrapper>
  );
});

export default Scase;
