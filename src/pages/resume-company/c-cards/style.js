import styled from 'styled-components'

export const CCardWrapper = styled.div`
  ${(props) => props.theme.mixin.content}
  text-align: center;
  margin-top: 40px;
  height: 650px;
  .banner_bg {
    font: 12px/1.5 Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, SimSun,
      sans-serif;
    color: #333;
    text-align: center;
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    background: url(${require('@/assets/img/banner_bg2.jpg')}) 50% no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.22;
  }
  h2 {
    padding-top: 100px;
    font-size: 40px;
    color: #222;
    line-height: 42px;
    position: relative;
    font-weight: 700;
    z-index: 2;
  }
  .ptext {
    font-size: 18px;
    color: #888;
    line-height: 24px;
    margin-top: 30px;
    position: relative;
    z-index: 2;
  }
  .morecard {
    /* this card is inspired form this - https://georgefrancis.dev/ */
    display: flex;
    .card {
      --border-radius: 0.75rem;
      --primary-color: #7257fa;
      --secondary-color: #3c3852;
      width: 310px;
      font-family: 'Arial';
      padding: 1rem;
      cursor: pointer;
      border-radius: var(--border-radius);
      background: #ffff;
      box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 3%);
      position: relative;
      margin: 30px;
    }

    .card > * + * {
      margin-top: 1.1em;
    }

    .card .card__content {
      color: var(--secondary-color);
      font-size: 0.86rem;
    }

    .card .card__title {
      padding: 0;
      font-size: 1.3rem;
      font-weight: bold;
    }

    .card .card__date {
      color: #6e6b80;
      font-size: 0.8rem;
    }

    .card .card__arrow {
      position: absolute;
      background: var(--primary-color);
      padding: 0.4rem;
      border-top-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      bottom: 0;
      right: 0;
      transition: 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card svg {
      transition: 0.2s;
    }

    /* hover */
    .card:hover .card__title {
      color: var(--primary-color);
      text-decoration: underline;
    }

    .card:hover .card__arrow {
      background: #111;
    }

    .card:hover .card__arrow svg {
      transform: translateX(3px);
    }
  }
  ${(props) => props.theme.mixin.btnV1}
`
