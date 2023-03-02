import styled from 'styled-components'

export const SoptimizeWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 80px 0;
  > .content {
    ${(props) => props.theme.mixin.content}
    > h3 {
      text-align: center;
      font-size: 36px;
      color: #222;
      line-height: 36px;
    }
    .tit-text {
      text-align: center;
      margin-top: 28px;
      color: #825633;
      font-size: 18px;
    }
    .icon-list {
      margin: 70px 10px;
      display: flex;
      .charact-subtitle {
        margin: auto;
        width: 60%;
        font-size: 14px;
      }
    }
  }
`
