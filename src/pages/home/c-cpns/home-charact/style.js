import styled from 'styled-components'

export const HomeCharactWrapper = styled.div`
  height: 200px;
  width: 33.33333%;
  .HomeCharact-content {
    padding: 5px;
    text-align: center;
    .charact-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
      &:hover {
        transform: translateY(-15px);
      }
      transition: all 1s;
    }
    .charact-title {
      font-size: 20px;
      color: #222;
      text-align: center;
      line-height: 20px;
      margin-top: 25px;
    }
    .charact-subtitle {
      margin-top: 15px;
      color: #888;
      min-height: 44px;
    }
  }
`
