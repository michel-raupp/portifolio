import styled from "styled-components";
import { Colors, Column, Container, FontSizes } from "../../../styles/styles";


export const Conteudo = styled(Column)`
    .illustrations-img{
        display: flex;
        flex-direction: column;
        gap: 5px;

        .instagram{
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${Colors.white};
            background-color: ${Colors.black};
            text-align: center;
            cursor: pointer;

            img{
                height: 20px;
                width: 20px;
                margin-left: 5px;
            }

            @media(max-width: 600px){
                flex-direction: column;
            }
            
            :hover{
                transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                background: ${Colors.terciary};
            }
        }

        img, .instagram{
            width: 200px;
            height: 200px;
            
            @media(max-width: 750px){
                width: 150px;
                height: 150px;
            }

            @media(max-width: 600px){
                width: 100px;
                height: 100px;
                font-size: 12px;
            }
            @media(max-width: 390px){
                width: 80px;
                height: 80px;
            }
        }
    }
`

export const ModalContent = styled(Container)`
    overflow: none;
    
    .content{
        display: flex;
        gap: 30px;
        @media(max-width: 600px){
            gap: 10px;
        }
        @media(max-width: 450px){
            flex-direction: column;
            align-items: center;
            gap: 0;
        }
    }
    .preview{
        background: ${Colors.grey};
        width: 200px;
        height: 200px;
        border-radius: 15px;
        @media(max-width: 600px){
            width: 150px;
            height: 150px;
        }
        @media (max-width: 450px){
            margin: 0 0 15px 0;
            width: 250px;
            height: 250px;
        }
        @media (max-width: 380px){
            margin: 0 0 15px 0;
            width: 200px;
            height: auto;
        }
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3{
            color: ${Colors.black};
            line-height: normal;
            font-size: ${FontSizes.wolf};
            font-weight: 600;
        }
        p{
            font-size: ${FontSizes.rat};
        }

        @media (max-width: 700px){
            h3{
            font-size: ${FontSizes.cat};
            font-weight: 600;
            }

            p{
                font-size: 12px;
            }
        }
        @media (max-width: 700px){
        gap: 10px;
        }
        
    }
`

export const Botoes = styled.div`
    .wrapper {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    list-style: none;

        @media(max-width: 600px){
            gap: 4px;
        }
    }
    .github, .website{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 0.5rem;
        border-radius: 10px;
        background: ${Colors.black};
        cursor: pointer;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

        p{
            font-family: "Poppins", sans-serif;
            color: ${Colors.white};
            font-size: ${FontSizes.rat};
            font-weight: 600;
        }

        @media (max-width: 700px){
            padding: 0.5rem;
            p{
                font-weight: 400;
                margin-right: 5px;
                font-size: 12px;
            }

            img{
                width: 15px;
                height: 15px;
            }
        }
    }

    .wrapper .github:hover{
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background: ${Colors.terciary};
    }

    .wrapper .website:hover{
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background: ${Colors.primary};
    }
`

