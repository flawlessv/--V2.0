import styled from 'styled-components'

export const SstepWrapper = styled.div`
  padding: 120px 0;
  background-color: #fff;
  margin-bottom: 50vh;
  > .content {
    ${(props) => props.theme.mixin.content}

    h3 {
      text-align: center;
      font-size: 36px;
      color: #222;
      line-height: 36px;
      font-weight: 400;
    }
    .step-list {
      font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
        sans-serif;
      color: #333;
      border: none;
      margin: 0;
      box-sizing: border-box;
      padding: 20px 0;
      .liucheng-list {
        font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei,
          SimSun, sans-serif;
        color: #333;
        border: none;
        box-sizing: border-box;
        list-style: none;
        max-width: 1200px;
        margin: 0 auto;
        padding: 15px 0;
        overflow: hidden;
        margin-top: 30px;
        li {
          font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei,
            SimSun, sans-serif;
          color: #333;
          border: none;
          margin: 0;
          box-sizing: border-box;
          list-style: none;
          float: left;
          width: 18%;
          min-height: 160px;
          padding: 40px 20px;
          border-radius: 10px 66px 10px 66px;
          background-color: #fff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
          text-align: center;
          position: relative;
          margin-left: 20px;
          h4 {
            font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei,
              SimSun, sans-serif;
            list-style: none;
            text-align: center;
            padding: 0;
            border: none;
            box-sizing: border-box;
            margin: 0;
            font-weight: 400;
            font-size: 18px;
            color: #222;
          }
          p {
            font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei,
              SimSun, sans-serif;
            list-style: none;
            text-align: center;
            padding: 0;
            border: none;
            margin: 0;
            box-sizing: border-box;
            margin-top: 15px;
            color: #999;
            font-size: 13px;
          }
          i {
            font-family: webfont !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            position: absolute;
            right: -18px;
            width: 20px;
            text-align: center;
            top: 50%;
            line-height: 20px;
            margin-top: -10px;
            color: #ddd;
          }
        }
      }
    }
    ${(props) => props.theme.mixin.btnV1}
  }
`
