import PropTypes from "prop-types";
import React, { memo } from "react";
import { ContentWrapper } from "./style";

const ResumeContent = memo((props) => {
  const {
    data: {
      startTime,
      endTime,
      posts = "",
      role = "",
      projectName = "",
      companyName = "",
      experienceName = "",
      content,
    },
    flag,
  } = props;
  let name = "";
  switch (flag) {
    case "e":
      name = experienceName;
      break;
    case "c":
      name = companyName;
      break;
    case "p":
      name = projectName;
      break;

    default:
      break;
  }
  return (
    <ContentWrapper>
      <ul className="list-top">
        <li className="time">{startTime + "~" + endTime}</li>
        <li className="name">{name}</li>
        <li className="position">{posts === "" ? role : posts}</li>
      </ul>
      <div
        className="editor-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </ContentWrapper>
  );
});

ResumeContent.propTypes = {
  data: PropTypes.object,
};

export default ResumeContent;
