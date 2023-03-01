import React, { memo } from "react";
import { useSelector } from "react-redux";
import ResumeTitle from "../resume-title";
import { ProjExpeWrapper } from "./style";

const SelfEvaluation = memo((props) => {
  const { selfEvaluation } = useSelector((state) => ({
    selfEvaluation: state.resume.resumeData.selfEvaluation,
  }));
  return (
    <ProjExpeWrapper>
      <ResumeTitle title="自我评价"></ResumeTitle>
      <div
        className="editor-content"
        dangerouslySetInnerHTML={{ __html: selfEvaluation }}
      ></div>
    </ProjExpeWrapper>
  );
});

export default SelfEvaluation;
