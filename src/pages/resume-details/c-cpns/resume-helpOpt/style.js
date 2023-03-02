import styled from 'styled-components'
export const HelperWrapper = styled.div`
  margin-top: 80px;
  height: 300px;
  .diagnose {
    cursor: pointer;

    padding: 15px 25px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #02c6db;
    position: relative;
    font-weight: 1000;
    font-size: 15px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
    overflow: hidden;
  }

  .diagnose::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  .diagnose:hover {
    color: #e8e8e8;
  }

  .diagnose:hover::before {
    width: 100%;
  }
  .optimize {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 15px;
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: #ad5389;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    border: none;
    letter-spacing: 0.05em;
    border-radius: 16px;
    margin-left: 15px;
    cursor: pointer;
  }

  .optimize svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  .optimize span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  .optimize:hover svg {
    transform: translateX(5px) rotate(90deg);
  }

  .optimize:hover span {
    transform: translateX(7px);
  }
  .card {
    margin-top: 80px;
    margin-left: -20px;
    width: 300px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }

  .header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    font-size: 18px;
  }

  .body {
    padding: 20px;
  }

  .skill {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #ecc;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 0px 0px 104px 45px rgba(45, 255, 195, 0.9);
      -moz-box-shadow: 0px 0px 105px 45px rgba(45, 255, 195, 0.9);
      box-shadow: 0px 0px 105px 45px rgba(45, 255, 195, 0.9);
    }
  }
`
