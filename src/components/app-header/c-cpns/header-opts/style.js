import styled from 'styled-components'

export const OptsWrapper = styled.div`
  /* width: 75%; */
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  /* CSS */
  .button-73 {
    appearance: none;
    background-color: #ffffff;
    border-radius: 40em;
    border-style: none;
    box-shadow: #adcfff 0 -12px 6px inset;
    box-sizing: border-box;
    color: #000000;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.24px;
    margin: 0;
    outline: none;
    padding: 1rem 1.3rem;
    quotes: auto;
    text-align: center;
    text-decoration: none;
    transition: all 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-73:hover {
    background-color: #ffc229;
    box-shadow: #ff6314 0 -6px 8px inset;
    transform: scale(1.125);
  }

  .button-73:active {
    transform: scale(1.025);
  }

  @media (min-width: 768px) {
    .button-73 {
      font-size: 1.5rem;
      padding: 0.75rem 2rem;
    }
  }
`
