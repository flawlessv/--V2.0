import styled from 'styled-components'

export const MyResumeWrapper = styled.div`
  .myresume {
    padding: 20px;

    .img-box {
      width: 165px;
      height: 230px;
      float: left;
      margin-top: 65px;
      background-color: #eee;
      background-position: center 0;
      background-repeat: no-repeat;
      background-size: 100% auto;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
      background-image: url(${require('@/assets/img/myresume.png')});
    }
    .resume-content {
      margin-left: 220px;
      .list_tit {
        font-size: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        .myresume-name {
          font-weight: 600;
        }
        .createTime {
          font-size: 12px;
          color: #9899;
        }
      }
      .intent-box {
        span {
          color: #333;
          font-size: 15px;
          border-right: 1px solid #ccc;
          padding-right: 5px;
          padding-left: 5px;
          cursor: pointer;
        }
        span:first-child {
          color: #888;
          border-right: none;
          font-size: 15px;
          line-height: 22px;
        }
        span:last-child {
          border-right: none;
        }
      }
      .resume-option {
        margin-top: 20px;
      }
      .ant-card-body {
        padding: 0;
        .MuiCardContent-root {
          margin-top: 5px;
          padding: 4px;
        }
      }
    }
  }
`
