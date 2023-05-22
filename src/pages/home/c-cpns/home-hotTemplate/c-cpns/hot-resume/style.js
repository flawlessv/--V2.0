import styled from 'styled-components'

export const HotResumeWrapper = styled.div`
  width: 25%;
  .hot-content {
    position: relative;
    padding: 5px;
    /* margin-right: 10px;
    margin-bottom: 10px; */
    /* height: 422px; */
    /* box-shadow: 1px 1px 1px 1px #ccc; */

    .hot-cover {
      box-sizing: border-box;
      border: 3px solid transparent;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      .hot-img {
        width: 100%;
        height: 422px;
        /* background-position: center 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #fff;
        background-image: url(${(props) => props.url}); */
        img{
          width: 100%;
          height: 100%;
        }
      }
      transition: all 0.5s;
      &:hover {
        .hot-img {
          filter: blur(1px);
        }
        border: 3px solid ${(props) => props.theme.color.primary};
        .useTemplate {
          display: block;
        }
      }
      /* .hot-cover-mask {
      display: none;
      width: 100%;
      height: 100%;
      background-color: #fff;
    } */
    }
    .useTemplate {
      display: none;
      position: absolute;
      width: 150px;
      bottom: 30%;
      left: 50%;
      transform: translateX(-50%);
      background-image: ${(props) => props.theme.mixin.backImg};
    }
    .tag-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 2px solid #000;
      .temp-use {
        font-size: 12px;
        color: #606060;
      }
    }
  }
`
