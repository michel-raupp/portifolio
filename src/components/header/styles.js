import styled from "styled-components";
import { Colors, Container, FontSizes } from "../../styles/styles";

export const Circle = styled.img`
    width: 450px;
    height: 450px;
    background: ${Colors.black};
    border-radius: 50%;
    align-self: center;
    justify-self: center;
    

    @media (max-width: 1100px){
        width: 400px;
        height: 400px;
    }
    @media (max-width: 550px){
        width: 90%;
        height: 90%;
    }
    
`
export const Button = styled(Container)`
    width: 350px;
    height: 100px;
    border-radius: 20px;
    background: grey;
`

export const Title = styled.h1`

    line-height: normal;
    font-size: ${FontSizes.giraffe};
    font-weight: 700;

    @media (max-width: 550px){
        font-size: 50px;
    }
    @media (max-width: 380px){
        font-size: 40px;
    }

    .footer-title{
        font-size: 63px;
        line-height: normal;
        @media (max-width: 550px){
            font-size: 43px;
        }
        @media (max-width: 380px){
            font-size: 35px;
        }
    }
`

export const Subtitle = styled(Container)`
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    max-width: 450px;
    margin: 20px 0;
    h2{
        font-size: ${FontSizes.hippo};
        white-space: nowrap;
    }
    .Line{
        top: 50%;
        width: 100%;
        height: 2px;
        background: ${Colors.grey};
    }

    @media (max-width: 550px){
        h2{
            font-size: ${FontSizes.horse};
        }
        margin: 0px 0 10px 0;
    }

    @media (max-width: 380px){
        h2{
            font-size: ${FontSizes.wolf};
        }
        margin: 0px 0 10px 0;
    }
    
`

export const Socials = styled(Container)`
    margin: 30px 0 0 0;
    gap: 20px;

    .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;

        @media (max-width: 1100px){
            padding-top: 10px;
        }
    }

    .wrapper .icon {
        position: relative;
        background: ${Colors.black};
        border-radius: 15px;
        margin: 0 10px;
        width: 65px;
        height: 65px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        //box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        img{
            width: 45px;
            height: 45px;
            filter: invert(1);
        }
    }

    @media (max-width: 380px){
        margin: 20px 0 0 0;
        .wrapper .icon {
            border-radius: 10px;
            width: 55px;
            height: 55px;
            margin: 0 5px;

            img{
                width: 40px;
                height: 40px;
            }
        }
    }

    .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    //box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    }

    .wrapper .icon:hover span,
    .wrapper .icon:hover .tooltip {
    //text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    }

    .wrapper .github:hover,
    .wrapper .github:hover .tooltip,
    .wrapper .github:hover .tooltip::before {
        background: ${Colors.primary};
    color: #fff;
    }

    .wrapper .email:hover,
    .wrapper .email:hover .tooltip,
    .wrapper .email:hover .tooltip::before {
    background: ${Colors.terciary};
    color: #fff;
    }

    .wrapper .instagram:hover,
    .wrapper .instagram:hover .tooltip,
    .wrapper .instagram:hover .tooltip::before {
    background: ${Colors.secondary};
    color: #fff;
    }

    .wrapper .linkedin:hover,
    .wrapper .linkedin:hover .tooltip,
    .wrapper .linkedin:hover .tooltip::before {
    background: ${Colors.red};
    color: #fff;
    }
`