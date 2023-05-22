import styled from 'styled-components'
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
    padding-right: 130px;
    min-width: 300px;
    text-align: center;
    #myname {
      font-size: 23px;
      color: #222;
      letter-spacing: 2px;
      padding-bottom: 2px;
      font-weight: 700;
    }
    .job-intent {
      position: relative;
      margin-left: -10px;
      font-size: 13px;
      line-height: 14px;
      span {
        margin: 0;
        margin-top: 9px;
        padding: 0 10px;
        display: inline-block;
        border-right: 1px solid #ccc;
        white-space: nowrap;
      }
    }
    dd {
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
  .basic_info_box {
    .basic_info_list {
      color: #333;
      border: none;
      padding-top: 15px;
      box-sizing: border-box;
      list-style: none;
      max-width: 590px;
      overflow: hidden;
      font-size: 13px;
      li {
        font-size: 14px;
        line-height: 1.7;
        border: none;
        box-sizing: border-box;
        list-style: none;
        padding: 2px 0;
        float: left;
        min-width: 50%;
        span {
          color: #333;
          font-size: 14px;
          list-style: none;
          min-width: 60px;
          text-align-last: justify;
          display: inline-block;
        }
      }
    }
    list-style: none;
    max-width: 580px;
    font-size: 13px;
    line-height: 1.7;
    margin: 0;
  }

  /* 3 */
  .basic_info_list {
    font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
      sans-serif;
    text-size-adjust: none;
    font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    width: 75%;
    overflow: hidden;
    color: #333;
    font-size: 13px;
    dt {
      font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
        sans-serif;
      text-size-adjust: none;
      font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
      padding: 0;
      border: none;
      margin: 0;
      box-sizing: border-box;
      font-size: 24px;
      font-weight: 700;
      border-bottom: 1px solid #bbb;
      height: 45px;
      margin-bottom: 10px;
      color: rgb(21, 117, 191);
      #myname {
        font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei,
          SimSun, sans-serif;
        text-size-adjust: none;
        font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
        font-size: 24px;
        color: rgb(21, 117, 191);
        padding: 0;
        border: none;
        box-sizing: border-box;
        margin: 0;
        float: left;
        height: 46px;
        line-height: 46px;
        border-bottom: 4px solid #5270af;
        border-color: rgb(21, 117, 191);
      }
      p {
        font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei,
          SimSun, sans-serif;
        text-size-adjust: none;
        font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
        font-weight: 700;
        color: rgb(21, 117, 191);
        padding: 0;
        border: none;
        margin: 0;
        box-sizing: border-box;
        float: left;
        margin-left: 40px;
        margin-top: 15px;
        font-size: 13px;
      }
    }
    dd {
      font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
        sans-serif;
      text-size-adjust: none;
      font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
      color: #333;
      font-size: 13px;
      border: none;
      margin: 0;
      box-sizing: border-box;
      padding: 3px 0;
      float: left;
      min-width: 50%;
      overflow: hidden;
      line-height: 20px;
      white-space: nowrap;
      span {
        padding-left: 10px;
      }
    }
  }
`
