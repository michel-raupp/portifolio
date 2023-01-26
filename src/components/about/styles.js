import styled from "styled-components";
import { Colors, Column, Container, FontSizes } from "../../styles/styles";

export const ProfileIMG = styled.img`
    border-radius: 20px;
    width: 450px;
    height: 450px;
    background: ${Colors.black};
`

export const CoisasAbout = styled(Column)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const Download = styled(Container)`

    //créditos para o @satyamchaudharydev
    //https://uiverse.io/satyamchaudharydev/afraid-yak-30

    .button {
        
        --width: 200px;
        --height: 65px;
        --tooltip-height: 35px;
        --tooltip-width: 90px;
        --gap-between-tooltip-to-button: 18px;
        --button-color: ${Colors.primary};
        --tooltip-color: #fff;
        width: var(--width);
        height: var(--height);
        background: var(--button-color);
        
        text-align: center;
        border-radius: 15px;
        font-family: "Poppins", sans-serif;
        font-size: ${FontSizes.wolf};
        transition: background 0.3s;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    }

    .button::before {
        position: absolute;
        content: attr(data-tooltip);
        width: var(--tooltip-width);
        height: var(--tooltip-height);
        background-color: var(--tooltip-color);
        font-size: 0.9rem;
        color: #111;
        border-radius: .25em;
        line-height: var(--tooltip-height);
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
        left: calc(50% - var(--tooltip-width) / 2);
    }

    .button::after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-top-color: var(--tooltip-color);
        left: calc(50% - 10px);
        bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
    }

    .button::after,.button::before {
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s;
    }

    .text {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button-wrapper,.text,.icon {
        cursor: pointer;
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
    }

    .text {
        top: 0
    }

    .text,.icon {
        transition: top 0.5s;
    }

    .icon {
        color: #fff;
        top: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button:hover {
        background: ${Colors.secondary};
    }

    .button:hover .text {
        top: -100%;
    }

    .button:hover .icon {
        top: 0;
    }

    .button:hover:before,.button:hover:after {
        opacity: 1;
        visibility: visible;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    }

    .button:hover:after {
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
    }

    .button:hover:before {
        bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
    }
    a{
        text-decoration: none;
    }
`