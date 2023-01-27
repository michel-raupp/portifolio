import styled from "styled-components";
import { Colors, Column, Container, FontSizes } from "../../../styles/styles";


export const Conteudo = styled(Column)`
    gap: 15px;

    hr{
        width: 100%;
        border: 1px solid ${Colors.grey};
    }

    .illustrations-img{
        img{
            width: 200px;
            height: 200px;
            background: blue;
        }
    }
`

export const ModalContent = styled(Container)`
    overflow: none;

    .content{
        display: flex;
        column-gap: 30px;
    }
    .preview{
        background: ${Colors.grey};
        width: 200px;
        height: 200px;
        border-radius: 15px;
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
    }
`

export const Botoes = styled.div`
    .wrapper {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
    list-style: none;
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

