import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepsWrapper } from "./style";
import OrderCard from "../order-card";
import ResumeTeamItem from "../../../../../../components/resume-team";
import PayCard from "../order-payCard";
import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import { createOrderInfo } from "../../../../../../services/modules/order";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const steps = ["选择服务类型", "挑选简历服务师", "付款"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const [skipped, setSkipped] = React.useState(new Set());
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const cardData = [
    {
      title: "普通",
      topContent: "提供简历指导.",
      bottomContent: "一个基础的简历服务.",
    },
    {
      title: "特殊",
      topContent: "提供面试辅助.",
      bottomContent: "一个进阶的简历服务.",
    },
    {
      title: "终极",
      topContent: "一条路包就业.",
      bottomContent: "一个终极的简历服务.",
    },
  ];
  const teamData = [
    {
      name: "李小泽",
      introduce:
        "Java的创始人，生于加拿大，是一个电脑程序方面的奇才。他在卡内基·梅隆大学学习电脑博士期间，曾为Unix开发过多个处理器版本，并创立了Java语言",
    },
    {
      name: "陈小新",
      introduce:
        "Spring Framework创始人，著名作者。Spring是一个开放源代码的设计层面框架，它解决的是业务逻辑层和其他各层的松耦合问题，因此它将面向接口的编程思想",
    },
    {
      name: "赵小伟",
      introduce:
        " 在大学中主修艺术，为了支付学费而兼职学习了编程。后来，他意识到自己更喜欢从事开源方面的工作。Brian 有一个 单人乐队 和两个 双人 乐队。同时，他还拥有一只可爱的猫咪。",
    },
  ];
  const orderObj = {
    createTime: "",
    endTime: "",
    integral: Math.floor(Math.random() * 10),
    orderId: Math.floor(Math.random() * 10000000),
    remake: "",
    serveId: 1,
    serveType: 0,
    state: 0,
    userId: 7,
  };
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //获取服务类型
  const getServiceType = (value) => {
    orderObj.serveType = value;
  };
  //获取规划师id
  const getServerType = (value) => {
    orderObj.serveId = value;
  };
  //获取订单备注
  const getRemake = (value) => {
    orderObj.remake = value;
  };
  //创建订单
  const handleCreateOrder = async () => {
    const res = await createOrderInfo(orderObj);
    if (res.code === 200) {
      handleClick();
      setActiveStep(3);
    }
  };
  return (
    <StepsWrapper>
      <Box sx={{ width: "80%", padding: "80px", margin: "50px auto" }}>
        {/* Stepper的标签 */}
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            {/* 完成操作的step */}
            <Typography sx={{ mt: 2, mb: 1 }}>
              <Result
                status="success"
                title="恭喜你已经完成订单!"
                subTitle="点击下方按钮可跳转到服务页面或您的订单列表"
                extra={[
                  <Button
                    onClick={() => navigate("/teacher")}
                    variant="outlined"
                  >
                    咨询规划师
                  </Button>,
                  <Button
                    onClick={() => navigate("/my/myorder")}
                    variant="outlined"
                  >
                    查看订单
                  </Button>,
                ]}
              />
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* 步骤条内容展示 */}
            <div className="step-content">
              {activeStep === 0 &&
                cardData.map((item, index) => (
                  <OrderCard
                    data={item}
                    key={item.title}
                    getServiceType={getServiceType}
                    index={index}
                  />
                ))}
              {activeStep === 1 && (
                <ResumeTeamItem
                  data={teamData}
                  option="选择他"
                  getServerType={getServerType}
                />
              )}
              {activeStep === 2 && <PayCard getRemake={getRemake} />}
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant="contained"
              >
                上一步
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep === steps.length - 1 ? (
                <Button
                  onClick={handleCreateOrder}
                  variant="contained"
                  color="success"
                >
                  完成
                </Button>
              ) : (
                <Button onClick={handleNext} variant="contained">
                  下一步
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="创建订单成功!"
        action={action}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </StepsWrapper>
  );
}
