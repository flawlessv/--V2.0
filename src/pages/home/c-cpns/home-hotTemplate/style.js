import styled from "styled-components";

export const HotTemplateWrapper = styled.div`
  background-color: #f5f5f5;
  padding-top: 50px;
  .hotTitle {
    text-align: center;
    h3 {
      font-size: 36px;
      color: #222;
      line-height: 36px;
      position: relative;
      z-index: 2;
    }
    p {
      font-size: 16px;
      color: #666;
      margin-top: 20px;
      margin-bottom: 30px;
      position: relative;
      z-index: 2;
    }
  }
  .re-template {
    display: flex;
    flex-wrap: wrap;
    width: 1220px;
    margin: 10px auto;
    margin-bottom: 0;
    /* padding-bottom:50px ; */
  }
  .rt-bun {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    position: relative;
    padding: 0 20px;
    font-size: 18px;
    text-transform: uppercase;
    border: 0;
    margin: 50px auto;
    cursor: pointer;
    box-shadow: hsl(210deg 87% 36%) 0px 7px 0px 0px;
    background-color: hsl(210deg 100% 44%);
    border-radius: 12px;
    overflow: hidden;
    transition: 31ms cubic-bezier(0.5, 0.7, 0.4, 1);
  }

  .rt-bun:before {
    content: attr(alt);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    font-size: 15px;
    font-weight: bold;
    color: white;
    letter-spacing: 4px;
    opacity: 1;
  }

  .rt-bun:active {
    box-shadow: none;
    transform: translateY(7px);
    transition: 35ms cubic-bezier(0.5, 0.7, 0.4, 1);
  }

  .rt-bun:hover:before {
    transition: all 0s;
    transform: translateY(100%);
    opacity: 0;
  }

  .rt-bun i {
    color: white;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 4px;
    font-style: normal;
    transition: all 2s ease;
    transform: translateY(-20px);
    opacity: 0;
  }

  .rt-bun:hover i {
    transition: all 0.2s ease;
    transform: translateY(0px);
    opacity: 1;
  }

  .rt-bun:hover i:nth-child(1) {
    transition-delay: 0.045s;
  }

  .rt-bun:hover i:nth-child(2) {
    transition-delay: calc(0.045s * 3);
  }

  .rt-bun:hover i:nth-child(3) {
    transition-delay: calc(0.045s * 4);
  }

  .rt-bun:hover i:nth-child(4) {
    transition-delay: calc(0.045s * 5);
  }

  .rt-bun:hover i:nth-child(6) {
    transition-delay: calc(0.045s * 6);
  }

  .rt-bun:hover i:nth-child(7) {
    transition-delay: calc(0.045s * 7);
  }

  .rt-bun:hover i:nth-child(8) {
    transition-delay: calc(0.045s * 8);
  }

  .rt-bun:hover i:nth-child(9) {
    transition-delay: calc(0.045s * 9);
  }

  .rt-bun:hover i:nth-child(10) {
    transition-delay: calc(0.045s * 10);
  }
`;
