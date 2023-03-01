import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  width: calc(100vw - 5px);
  .header-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${(props) => (props.path === "/" ? "" : props.theme.mixin.dropStyle)};
    height: 66px;

    &.dropStyle {
      background-color: #fff;
      color: #ccc;
      border-bottom: 1px solid #ccc;
      box-shadow: 0 0 10px rgb(0 0 0 / 60%);
      .tabs {
        color: #333;
        &:hover {
          text-shadow: 0 0 3px rgb(0 0 0 / 20%);
          color: #2047be;
        }
      }
    }
  }
`;
