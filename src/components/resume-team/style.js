import styled from 'styled-components'

export const TeamWrapper = styled.div`
  .cards {
    display: flex;
    justify-content: space-around;
    ${(props) => props.theme.mixin.content}
    .card {
      width: 17em;
      height: 22.5em;
      background: #171717;
      transition: 1s ease-in-out;
      clip-path: polygon(
        30px 0%,
        100% 0,
        100% calc(100% - 30px),
        calc(100% - 30px) 100%,
        0 100%,
        0% 30px
      );
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    .card span {
      font-weight: bold;
      color: white;
      text-align: center;
      display: block;
      padding-top: 1em;
      font-size: 1em;
    }

    .card .info {
      font-weight: 400;
      color: white;
      display: block;
      text-align: center;
      padding-top: 0.1em;
      font-size: 0.72em;
      margin: 1em;
      margin-top: 1em;
    }

    .card .img {
      width: 4.8em;
      height: 4.8em;
      background: white;
      border-radius: 15px;
      margin: auto;
      margin-top: 1.7em;
      img {
        width: 100%;
      }
    }

    .card .share {
      text-align: center;
      margin-top: 1.8em;
    }

    .card a {
      color: white;
      transition: 0.4s ease-in-out;
    }

    .card a:hover {
      color: rgb(36, 116, 221);
    }

    .card button {
      padding: 0.8em 1.7em;
      display: block;
      margin: auto;
      border-radius: 25px;
      border: none;
      margin-top: 2em;
      font-weight: bold;
      background: #ffffff;
      color: rgb(0, 0, 0);
      transition: 0.4s ease-in-out;
    }

    .card button:hover {
      background: rgb(36, 116, 221);
      color: white;
    }
  }
`
