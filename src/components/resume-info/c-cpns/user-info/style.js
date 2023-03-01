import styled from "styled-components";

export const BaseInfoWrapper = styled.div`
  font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
    sans-serif;
  user-select: none;
  text-size-adjust: none;
  position: relative;
  font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
  color: #333;
  border: none;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  min-height: 144px;
  padding: 28px 30px 15px;

  .base_info {
    font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
      sans-serif;
    user-select: none;
    text-size-adjust: none;
    font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
    color: #333;
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    padding-right: 130px;
    min-width: 300px;
    text-align: center;
    #myname {
      font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
        sans-serif;
      user-select: none;
      text-size-adjust: none;
      font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
      text-align: center;
      padding: 0;
      border: none;
      margin: 0;
      box-sizing: border-box;
      font-size: 23px;
      color: #222;
      letter-spacing: 2px;
      padding-bottom: 2px;
      font-weight: 700;
    }
    .job-intent {
      font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
        sans-serif;
      user-select: none;
      text-size-adjust: none;
      font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
      color: #333;
      text-align: center;
      padding: 0;
      border: none;
      margin: 0;
      box-sizing: border-box;
      position: relative;
      margin-left: -10px;
      font-size: 13px;
      line-height: 14px;
      span {
        font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei,
          SimSun, sans-serif;
        user-select: none;
        text-size-adjust: none;
        font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
        color: #333;
        text-align: center;
        font-size: 13px;
        line-height: 14px;
        border: none;
        box-sizing: border-box;
        margin: 0;
        margin-top: 9px;
        padding: 0 10px;
        display: inline-block;
        border-right: 1px solid #ccc;
        white-space: nowrap;
      }
    }
    dd {
      color: #333;
      text-align: center;
      padding: 0;
      border: none;
      margin: 0;
      box-sizing: border-box;
      position: relative;
      margin-left: -10px;
      font-size: 13px;
      line-height: 14px;
    }
    span {
      margin: 0;
      margin-top: 9px;
      padding: 0 10px;
      display: inline-block;
      border-right: 1px solid #ccc;
      white-space: nowrap;
    }
  }
  .photo_box {
    font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
      sans-serif;
    user-select: none;
    text-size-adjust: none;
    font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
    color: #333;
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    top: 25px;
    z-index: 3;
    width: 102px;
    background-color: #f9f9f9;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: 50%;
    right: 50px;
  }
`;
