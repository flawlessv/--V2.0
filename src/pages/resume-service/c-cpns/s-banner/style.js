import styled from "styled-components";

export const SBannerWrapper = styled.div`
  padding: 120px 0;
  text-align: center;
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #fff;
  > .content {
    ${(props) => props.theme.mixin.content}

    .s-bannerbg {
      background: url(${require("@/assets/img/cartoon.png")}) no-repeat bottom;
      background-size: auto 60%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.22;
    }
    h2 {
      font-size: 50px;
      color: #222;
      line-height: 42px;
      position: relative;
      z-index: 2;
    }
    .text2 {
      font-size: 25px;
      margin-top: 40px;
      color: #666;
    }
    .text {
      font-size: 22px;
      color: #ff3b00;
      line-height: 24px;
    }
    ${(props) => props.theme.mixin.btnV1}
  }
`;
