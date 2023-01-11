import styled from "styled-components";

export const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50vh;
    padding-top: 5vh;
    background-color: #39394d;
    .footer-content{
        
        /* display: flex;
        justify-content: center;
        align-items: center; */
        color: #fff;

        text-align: center;
        .footer-title{
            font-size: 32px;
            padding-bottom: 5vh;
        }
        .footer-subtitle{
            opacity: .6;
        }
        .footer-link{
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: black;
            margin-top: 30px;
            padding: 20px;
            .link-item{
                font-size: 14px;
                padding:20px;
                &:hover{
                    text-decoration: underline;
                    color: #7164E5;
                }
            }
        }
        .friend-link{
            opacity: .6;
          span{
            font-weight: 600;
          }
          .friend-item{
            padding: 10px;
            text-decoration: none;
          }
         
        }
        .right{
            font-size: 12px;
            opacity: .6;
            margin-top: 50px;
          }
    }
`