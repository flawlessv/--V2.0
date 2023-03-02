import styled from 'styled-components'

export const ServiceSetionWrapper = styled.div`
  .task_type_plate {
    position: relative;
    top: 0;
    float: left;
    width: 320px;
    height: 480px;
    padding-top: 20px;
    overflow: hidden;
    background-color: #f3f3f3;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.5s;
    transition: all 0.3s;

    .task_type_plate_img {
      color: #666;
      font-size: 0;
      box-sizing: border-box;
      font-family: 'microsoft yahei';
      margin: 0;
      padding: 0;
      border: 0;
      position: absolute;
      top: 110px;
      z-index: 2;
      height: 130px;
      transition: all 0.3s;
      left: 74px;
    }
    &.active {
      top: -20px;
      z-index: 2;
      width: 580px;
      height: 500px;
      background-color: #fff;
      -webkit-box-shadow: 0 0 15px rgb(88 88 88 / 10%);
      -moz-box-shadow: 0 0 15px rgba(88, 88, 88, 0.1);
      box-shadow: 0 0 15px rgb(88 88 88 / 10%);
      .task_type_plate_img {
        left: 140px;
        top: 62px;
        height: 150px;
      }
    }
    .task_type_plate_active {
      color: #666;
      font-size: 0;
      box-sizing: border-box;
      font-family: 'microsoft yahei';
      margin: 0;
      padding: 0;
      border: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      z-index: 1;
      opacity: 1;
      .publishNeed {
        cursor: pointer;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'microsoft yahei';
        text-decoration: none;
        position: absolute;
        bottom: 30px;
        left: 50px;
        display: block;
        width: 115px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background-image: linear-gradient(to right, #2ddd9d, #1cc7cf);
        border-radius: 50px;
        background-color: #2ddd9d;
        transition: all 0.3s;
      }
      .task_type_plateactive_img {
        color: #666;
        font-size: 0;
        box-sizing: border-box;
        font-family: 'microsoft yahei';
        margin: 0;
        padding: 0;
        border: none;
        position: relative;
        width: 100%;
        height: 230px;

        img {
          color: #666;
          font-size: 0;
          box-sizing: border-box;
          font-family: 'microsoft yahei';
          margin: 0;
          padding: 0;
          border: 0;
          position: absolute;
          bottom: 20px;
          left: 55px;
        }
      }
      .task_type_plateactive_title {
        box-sizing: border-box;
        font-family: 'microsoft yahei';
        margin: 0;
        padding: 0;
        border: none;
        text-align: inherit;
        padding-left: 50px;
        font-size: 16px;
        line-height: 3.6;
        color: #686868;
        transition: all 0.3s 0.25s;
        opacity: 1;
      }
      .task_type_plateactive_msg {
        box-sizing: border-box;
        font-family: 'microsoft yahei';
        margin: 0;
        border: none;
        text-align: inherit;
        transition: all 0.3s 0.25s;
        width: 580px;
        padding: 0 50px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 1.6;
        color: #999;
        opacity: 1;
      }
    }
    .task_type_plate_init {
      color: #666;
      font-size: 0;
      box-sizing: border-box;
      font-family: 'microsoft yahei';
      margin: 0;
      padding: 0;
      border: none;
      position: absolute;
      top: 20px;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      .task_type_plateinit_title {
        box-sizing: border-box;
        font-family: 'microsoft yahei';
        margin: 0;
        padding: 0;
        border: none;
        text-align: center;
        font-size: 22px;
        color: #363636;
      }
      .task_type_plateinit_s_title {
        box-sizing: border-box;
        font-family: 'microsoft yahei';
        margin: 0;
        padding: 0;
        border: none;
        text-align: center;
        font-size: 12px;
        color: #bcbcbc;
        line-height: 2.5;
      }
      .task_type_plateinit_content {
        box-sizing: border-box;
        font-family: 'microsoft yahei';
        margin: 0;
        padding: 0;
        border: none;
        margin-top: 180px;
        text-align: center;
        font-size: 15px;
        color: #727272;
        line-height: 4;
      }
      .task_type_plateinit_msglist {
        color: #666;
        font-size: 0;
        box-sizing: border-box;
        font-family: 'microsoft yahei';
        padding: 0;
        border: none;
        list-style: none;
        width: 220px;
        margin: auto;
        li {
          list-style: none;
          box-sizing: border-box;
          font-family: 'microsoft yahei';
          margin: 0;
          padding: 0;
          border: none;
          position: relative;
          padding-left: 20px;
          font-size: 12px;
          color: #9c9c9c;
          line-height: 1.8;
          &::before {
            content: '';
            position: absolute;
            top: 6px;
            left: 2px;
            width: 10px;
            height: 4px;
            border: 2px solid ${(props) => props.theme.color.primary};
            border-top: transparent;
            border-right: transparent;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
        }
      }
    }
    span {
      color: ${(props) => props.theme.color.primary};
    }
  }
`
