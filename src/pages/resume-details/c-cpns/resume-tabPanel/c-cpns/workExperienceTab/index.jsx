import PropTypes from "prop-types";
import React, { memo } from "react";
import TabEditor from "../tab-Editor";
import EditorInputs from "../editor-inputs";
const orkExperience = memo((props) => {
  const data = [
    {
      name: "experienceName",
      label: "经历名称",
    },
    {
      name: "role",
      label: "角色",
    },
    {
      name: "time",
      label: "时间",
    },
  ];
  return (
    <div className="re-skill">
      <EditorInputs data={data}></EditorInputs>
      <TabEditor></TabEditor>
    </div>
  );
});

orkExperience.propTypes = {};

export default orkExperience;
