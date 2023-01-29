import styled from "styled-components";

export const OptsWrapper = styled.div`
    /* width: 75%; */
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    .optBtn{
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        border-radius: 5% ;
        outline: none;
        border: none;
        background-image: ${props=>props.theme.mixin.backImg};
        overflow: hidden;
        transition: color 0.4s ease-in-out;
        &::before{
            content: '';
            z-index: -1;
            position: absolute;
            bottom: 100%;
            left: 100%;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: #5cb3cc;
            transform-origin: center;
            transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
            transition: transform 0.55s ease-in-out;
        }
        &:hover{
            cursor: pointer;
            color: #161616;
            &::before{
                transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
            }   
        }
    }

`