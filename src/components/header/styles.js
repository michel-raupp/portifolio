import styled from "styled-components";
import { Colors, Container, FontSizes } from "../../styles/styles";

export const Circle = styled.div`
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background: ${Colors.black};
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
`

export const Subtitle = styled(Container)`
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: 570px;
    margin: 20px 0 20px 0;
    h2{
        font-size: ${FontSizes.hippo};
        width: auto;
    }
    .Line{
        top: 50%;
        width: 100px;
        height: 2px;
        background: ${Colors.grey};
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
    }

    .wrapper .icon {
    position: relative;
    background: ${Colors.black};
    border-radius: 15px;
    margin: 0 20px 0 0;
    width: 65px;
    height: 65px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    img{
        width: 45px;
        height: 45px;
            filter: invert(1);
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
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
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
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
    }

    .wrapper .facebook:hover,
    .wrapper .facebook:hover .tooltip,
    .wrapper .facebook:hover .tooltip::before {
    background: ${Colors.terciary};
    color: #fff;
    }

    .wrapper .twitter:hover,
    .wrapper .twitter:hover .tooltip,
    .wrapper .twitter:hover .tooltip::before {
    background: ${Colors.primary};
    color: #fff;
    }

    .wrapper .instagram:hover,
    .wrapper .instagram:hover .tooltip,
    .wrapper .instagram:hover .tooltip::before {
    background: ${Colors.secondary};
    color: #fff;
        
    }
`