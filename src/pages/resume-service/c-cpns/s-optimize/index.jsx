import React, { memo } from "react";
import HomeCharact from "../../../home/c-cpns/home-charact";
import { SoptimizeWrapper } from "./style";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
const Soptimize = memo(() => {
  const data = [
    {
      title: "定制方案",
      subtitle: "分析求职需求，制定优化策略",
      element: (
        <DesignServicesIcon sx={{ width: 40, height: 40, color: "green" }} />
      ),
    },
    {
      title: "简历制作撰写",
      subtitle: "设计模板、撰写简历，使简历内容饱满、层次分明、重点突出",
      element: (
        <AccountBalanceWalletIcon
          sx={{ width: 60, height: 60, color: "green" }}
        />
      ),
    },
    {
      title: "定向优化",
      subtitle: "针对面试的公司和职位定向优化，使简历更符合公司的招聘需求",
      element: (
        <CameraswitchIcon sx={{ width: 60, height: 60, color: "green" }} />
      ),
    },
    {
      title: "风险优化",
      subtitle: "提前发现简历暴露的风险点，针对性优化，提升通过率",
      element: (
        <VerifiedUserIcon sx={{ width: 60, height: 60, color: "green" }} />
      ),
    },
  ];
  return (
    <SoptimizeWrapper>
      <div className="content">
        <h3>简历优化/代写服务内容</h3>
        <div className="tit-text">7天内免费修改，售后无忧</div>
        <div className="icon-list">
          {data.map((item) => (
            <HomeCharact cData={item} key={item.title} />
          ))}
        </div>
      </div>
    </SoptimizeWrapper>
  );
});

export default Soptimize;
