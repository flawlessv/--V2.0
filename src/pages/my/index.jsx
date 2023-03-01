import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { MyWrapper } from "./style";

import MyTabs from "../../components/my-tabs";
const My = memo(() => {
  return (
    <MyWrapper>
      <div className="my-left">
        <MyTabs>
          <div className="my-right">
            <Outlet></Outlet>
          </div>
        </MyTabs>
      </div>
    </MyWrapper>
  );
});

export default My;
