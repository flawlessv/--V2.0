import styled from 'styled-components'

export const ScaseWrapper = styled.div`
  padding: 120px 0;
  background-color: #f9f9f9;

  h3 {
    text-align: center;
    font-size: 36px;
    color: #222;
    line-height: 36px;
    font-weight: 400;
  }
  .anli_list {
    overflow: hidden;
    max-width: 1600px;
    margin: 36px auto 0;
    list-style: none;
    li {
      float: left;
      width: 45%;
      margin: 20px 2%;
      padding: 20px 10px;
      overflow: hidden;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-shadow: 0 0 15px rgb(0 0 0 / 15%);
      box-shadow: 0 0 15px rgb(0 0 0 / 15%);
      border-radius: 20px;
      background-color: #fff;
      .demo_box {
        float: left;
        width: 50%;
        img {
          width: 100%;
        }
        h4 {
          text-align: center;
          color: #888;
          font-weight: 700;
          font-size: 18px;
          margin-top: 6px;
        }
      }
    }
  }
  ${(props) => props.theme.mixin.btnV1}
`
