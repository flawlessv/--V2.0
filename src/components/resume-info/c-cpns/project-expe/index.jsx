import React, { memo } from "react";
import { useSelector } from "react-redux";
import ResumeContent from "../resume-content";
import ResumeTitle from "../resume-title";
import { ProjExpeWrapper } from "./style";

const ProjExpe = memo((props) => {
  const { projectExperience } = useSelector((state) => ({
    projectExperience: state.resume.resumeData.projectExperience,
  }));
  return (
    <ProjExpeWrapper>
      <ResumeTitle title="项目经验"></ResumeTitle>
      <ResumeContent data={projectExperience} flag="p"></ResumeContent>
    </ProjExpeWrapper>
  );
});

export default ProjExpe;
