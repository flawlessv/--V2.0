import styled from 'styled-components'

export const ItemWrapper = styled.div`
margin-bottom:40px;
  .order-item {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 0.8vw;
    color: #fff;
    background-color: rgb(28, 28, 30);
    box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
    border-radius: 0.4vw;
    border: none;
    outline: none;
    padding: 0.4vw;
    max-width: 190px;
    margin: 5px;
    transition: 0.4s;
    cursor: pointer;
  }

  .order-item:hover {
    box-shadow: 0 0 0 0.15vw skyblue;
  }
`
