import PropTypes from "prop-types";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import TabInput from "../tab-input";
import { JobIntentTabWrapper } from "./style";
const JobIntentTab = memo((props) => {
  const data = [
    {
      name: "intent",
      label: "求职岗位",
    },
    {
      name: "city",
      label: "意向城市",
    },
    {
      name: "expectSalary",
      label: "期望薪资",
    },
    {
      name: "onboardTime",
      label: "入职时间",
    },
  ];

  const { jobIntent } = useSelector((state) => ({
    jobIntent: state.resume.resumeData.jobIntent,
  }));

  return (
    <JobIntentTabWrapper>
      {data.map((item) => (
        <TabInput data={item} key={item.name} isIntent={true} />
      ))}
      {/* <TabDate></TabDate> */}
    </JobIntentTabWrapper>
  );
});

JobIntentTab.propTypes = {};

export default JobIntentTab;
