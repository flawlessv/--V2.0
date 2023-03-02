import styled from 'styled-components'

export const MyTabsWrapper = styled.div`
  .mytabs {
    margin-right: 20px;

    button {
      font-size: 15px;
      cursor: pointer;
      margin-top: 20px;
      position: relative;
      line-height: 36px;
      font-weight: 400;
      color: #1677ff;
      &.active {
        background-color: blue;
      }
    }
    button[tabindex='0'] {
      color: #fff;
      background-color: #1677ff;
    }
  }
  div[aria-labelledby^='vertical-tab-'] {
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
  }
  .css-19kzrtu {
    padding: 0;
  }
`
