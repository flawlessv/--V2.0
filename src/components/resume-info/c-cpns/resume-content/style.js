import styled from 'styled-components'

export const ContentWrapper = styled.div`
  margin-top: 16px;
  .list-top {
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    overflow: hidden;
    font-size: 13px;
    .time {
      list-style: none;
      margin-right: 30px;
      line-height: 1.6;
      font-weight: 700;
      text-align: left;
      float: left;
      margin-left: 0;
      min-width: 160px;
    }
    .name {
      float: left;
      line-height: 1.6;
      font-weight: 700;
      min-width: 260px;
      text-align: center;
      margin-right: 0;
    }
    .position {
      list-style: none;
      line-height: 1.6;
      text-align: left;
      font-weight: 700;
      min-width: inherit;
      margin-right: 0;
      float: right;
    }
  }
  .editor-content {
    font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
      sans-serif;
    user-select: none;
    text-size-adjust: none;
    font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
    border: none;
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    outline: none;
    overflow-y: auto;
    tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 0;
    color: #555;
    font-size: 13px;
    margin-top: 7px;
    line-height: 1.7;
  }
`
