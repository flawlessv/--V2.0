import styled from 'styled-components'

export const BasicInfoTabWrapper = styled.div`
  .baseInfo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
  }
  .addInfoContentBox {
    display: flex;
    justify-content: flex-start;
    width: 80vw;
    flex-wrap: wrap;
    padding-left: 5px;
    .addInfoContent {
      display: flex;
      justify-content: center;
      align-items: center;
      /* margin-right: 70px; */
    }
  }

  .addInfoForm {
    .addInput {
      margin-right: 10px;
    }
  }
`
