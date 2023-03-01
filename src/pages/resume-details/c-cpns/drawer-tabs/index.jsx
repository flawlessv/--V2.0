import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import ResumeTabPanel from "../resume-tabPanel";
import BasicInfoTab from "../resume-tabPanel/c-cpns/basicInfoTab";
import JobIntentTab from "../resume-tabPanel/c-cpns/jobIntentTab";
import ProjectExperience from "../resume-tabPanel/c-cpns/projectExperienceTab";
import CampusExperienceTab from "../resume-tabPanel/c-cpns/campusExperienceTab";
import CertificateHonorTab from "../resume-tabPanel/c-cpns/certificateHonorTab";
import SelfEvaluationTab from "../resume-tabPanel/c-cpns/selfEvaluationTab";
import SkillSpecialtiesTab from "../resume-tabPanel/c-cpns/skillSpecialtiesTab";
import WorkExperienceTab from "../resume-tabPanel/c-cpns/workExperienceTab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//抽屉上方Tab栏组件
export default function BaseTabs() {
  const [value, setValue] = React.useState(0);

  const TabsData = [
    {
      name: "baseInfo",
      label: "基本信息",
      component: <BasicInfoTab />,
    },
    {
      name: "jobIntent",
      label: "求职意向",
      component: <JobIntentTab />,
    },
    {
      name: "skillSpecialties",
      label: "技能特长",
      component: <SkillSpecialtiesTab />,
    },
    {
      name: "projectExperience",
      label: "项目经历",
      component: <ProjectExperience />,
    },
    {
      name: "workExperience",
      label: "工作经历",
      component: <WorkExperienceTab />,
    },
    {
      name: "campusExperience",
      label: "校园经历",
      component: <CampusExperienceTab />,
    },
    {
      name: "certificateHonor",
      label: "荣誉证书",
      component: <CertificateHonorTab />,
    },
    {
      name: "selfEvaluation",
      label: "自我评价",
      component: <SelfEvaluationTab />,
    },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* 下方抽屉顶部tab标题 */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Base tabs example"
        >
          {TabsData.map((item, index) => (
            <Tab label={item.label} {...a11yProps(index)} key={item.label} />
          ))}
        </Tabs>
      </Box>
      {TabsData.map((item, index) => (
        <ResumeTabPanel
          value={value}
          index={index}
          key={item.label}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {item.component}
        </ResumeTabPanel>
      ))}
    </Box>
  );
}
