import React, { memo } from "react";
import { useSelector } from "react-redux";
import ResumeContent from "../resume-content";
import ResumeTitle from "../resume-title";
import { WorkExpeWrapper } from "./style";

const WorkExpe = memo((props) => {
  const { workExperience } = useSelector((state) => ({
    workExperience: state.resume.resumeData.workExperience,
  }));
  return (
    <WorkExpeWrapper>
      <ResumeTitle title="工作经验"></ResumeTitle>
      <ResumeContent data={workExperience} flag="c"></ResumeContent>
    </WorkExpeWrapper>
  );
});

export default WorkExpe;
