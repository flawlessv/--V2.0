import styled from 'styled-components'

export const TabsWrapper = styled.div`
  .tablist {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .tabs {
      font-weight: 400;
      font-size: 16px;
      color: #fff;
      position: relative;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #144fff;
        transform-origin: bottom right;
        transform: scaleX(0);
        transition: transform 0.7s ease;
      }
      &:hover::before {
        transform-origin: bottom left;
        transform: scaleX(1);
      }

      /* &:hover{
        text-shadow: 0 0 3px rgb(0 0 0 / 20%);
    } */
      /* .css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
        &:hover{
            color: #1976d2;
        }
    } */
      /* color: #ccc; */
    }
  }
`
