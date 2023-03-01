import React, { memo } from "react";
import { MyResumeWrapper } from "./style";
import { Card as ACard} from "antd";
import Card  from '@mui/material/Card';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
const MyResume = memo(() => {
  const {
    baseInfo: { name },
    jobIntent: { intent, expectSalary, city },
    createTime,
  } = useSelector((state) => ({
    baseInfo: state.resume.resumeData.baseInfo,
    jobIntent: state.resume.resumeData.jobIntent,
    createTime: state.resume.resumeData.createTime,
  }));
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <MyResumeWrapper>
      <ACard
        title="我的简历"
        bordered={false}
        style={{
          width: 1050,
          height: 500,
        }}
      >
        <div className="myresume">
          <a href="#asd" className="img-box">
            {/* 我的简历 */}
          </a>
          <div className="resume-content">
            <div className="list_tit">
              <div className="myresume-name">{name}</div>
              <div className="createTime">创建时间:{createTime}</div>
            </div>
            <div className="intent-box">
              <span>期望: </span>
              <span>{intent}</span>
              <span>{expectSalary}</span>
              <span>{city}</span>
            </div>
            <Card sx={{ minWidth: 100,mt:2 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  找不到工作?不会写简历?
                </Typography>
                <Typography variant="h5" component="div">
                  简{bull}历{bull}规{bull}划{bull}师
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                一对一沟通百分百定制
                </Typography>
                <Typography variant="body2">
               带你分析目标岗位相关性,深入挖掘个人能力
                  <br />
                  {'"你好,需要简历援助吗~"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{
                  padding:0
                }}>了解更多</Button>
              </CardActions>
            </Card>
            <div className="resume-option">
              <Stack direction="row" spacing={2}>
                <Button
                  color="secondary"
                  variant="contained"
                  startIcon={<EditIcon />}
                >
                  编辑
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<CloudDownloadIcon />}
                >
                  下载
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<ScreenShareIcon />}
                >
                  分享
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  删除
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </ACard>
    </MyResumeWrapper>
  );
});

export default MyResume;
