import styled from 'styled-components'

export const TitleWrapper = styled.div`
  font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
    sans-serif;
  user-select: none;
  text-size-adjust: none;
  font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
  padding: 0;
  border: none;
  margin: 0;
  box-sizing: border-box;
  line-height: 20px;
  height: ${(props) => (props.templateId === 1 ? '25px' : '35px')};
  font-weight: 400;
  border-bottom: ${(props) =>
    props.templateId === '2'
      ? '1px solid #76ba31'
      : props.templateId === '3'
      ? ''
      : '1px solid #666'};
  white-space: nowrap;
  font-size: 16px;
  color: #284967;
  position: relative;
  span {
    line-height: 20px;
    white-space: nowrap;
    font-size: 16px;
    color: #284967;
    padding: 0;
    border: none;
    box-sizing: border-box;
    margin: 0;
    font-weight: 700;
  }
  .kit {
    position: absolute;
    left: -20px;
    top: 0px;
    height: 32px;
    line-height: 32px;
    padding: 0 40px 0 18px;
    min-width: 180px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
    background-color: #76ba31;
    &::before {
      display: block;
      content: '';
      width: 32px;
      height: 32px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      background-color: #fff;
      position: absolute;
      right: -23px;
      top: 0;
    }
    i {
      font-family: qmfont !important;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      margin-right: 10px;
      font-size: 20px;
      float: left;
    }
    dfn {
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
      padding: 0;
      border: none;
      box-sizing: border-box;
      margin: 0;
      font-style: normal;
      display: block;
      width: 0;
      height: 0;
      overflow: hidden;
      border-style: solid;
      border-width: 12px 0 0 18px;
      border-color: #4badc6 transparent transparent;
      position: absolute;
      left: 0;
      top: 100%;
      border-top-color: rgb(88, 156, 19);
    }
  }
  .module_tit {
    font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
      sans-serif;
    text-size-adjust: none;
    font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    line-height: 20px;
    height: 28px;
    padding-bottom: 8px;
    font-weight: 400;
    border-bottom: 2px solid #999;
    white-space: nowrap;
    font-size: 16px;
    color: rgb(21, 117, 191);
    span {
      font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
        sans-serif;
      text-size-adjust: none;
      font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
      line-height: 20px;
      white-space: nowrap;
      font-size: 16px;
      color: rgb(21, 117, 191);
      border: none;
      box-sizing: border-box;
      margin: 0;
      font-weight: 700;
      padding: 0 2px;
      display: inline-block;
      height: 29px;
      border-bottom: 4px solid #5270af;
      border-color: rgb(21, 117, 191);
    }
  }
`
