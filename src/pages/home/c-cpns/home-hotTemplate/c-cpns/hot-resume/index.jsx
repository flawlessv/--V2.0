import React, { memo } from "react";
import Button from "@mui/material-next/Button";
import Chip from "@mui/material/Chip";
import { HotResumeWrapper } from "./style";
import defalutImgUrl from "@/assets/img/template1.png";
const HotResume = memo((props) => {
  const { imgUrl = defalutImgUrl } = props;
  const tagData = ["6种语言", "封面", "自荐信"];
  return (
    <HotResumeWrapper url={imgUrl}>
      <div className="hot-content">
        <div className="hot-cover">
          <div className="hot-img"></div>
          <div className="hot-cover-mask"></div>
          <a
            href="/details?resumeId=1"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button
              color="primary"
              size="large"
              variant="filled"
              className="useTemplate"
            >
              立即使用
            </Button>
          </a>

          <div className="tag-box">
            <div className="tags">
              {tagData.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{ margin: "2px", fontSize: "12px" }}
                  variant="outlined"
                  color="secondary"
                  size="small"
                />
              ))}
            </div>
            <span className="temp-use">24123人使用</span>
          </div>
        </div>
      </div>
    </HotResumeWrapper>
  );
});

export default HotResume;
