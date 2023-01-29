import styled from "styled-components";

export const BannerWrapper = styled.div`
 color: #fff;
 text-align: center;
 margin-top: 15vh;
 font-weight: 100;
text-shadow: 0 0 5px rgb(0 0 0 / 20%);
.banner-title{
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 40px;
    /* color:${props=>props.theme.color.primary} */
}
.banner-btn{
    padding: 12px 40px;
    font-size: 18px;
   background-image:${props => props.theme.mixin.backImg} ;
   margin-top: 20px;
}
`