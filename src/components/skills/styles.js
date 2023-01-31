import styled from "styled-components";
import { Box, Colors, FontSizes } from "../../styles/styles";

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 420px);
    grid-gap: 3rem;
    justify-content: center;
    @media (max-width: 1000px){
        grid-template-columns: repeat(1, 420px);;
    }
    @media (max-width: 450px){
        grid-template-columns: repeat(1, 100%);
        grid-gap: 2rem;
    }
`

export const SkillCard = styled(Box)`

    padding: 20px 20px;

    h3{//Title (Hard skills/Soft Skills)
        justify-content: center;
        text-align: center;
        color: ${Colors.black};
        line-height: normal;
        font-size: ${FontSizes.wolf};
        font-weight: 600;
        margin-bottom: 25px;
    }
   
    .hardSkillsBox{
        display: flex;
        padding-left: 20px;
        column-gap: 5rem;
        @media (max-width: 450px){
            padding-left: 0;
            column-gap: 0;
            justify-content: space-between;
        }
    }

    .softSkillsBox{
        display: flex;
        justify-content: center;
        column-gap: 2.5rem;
        @media (max-width: 450px){
            padding-left: 0;
            column-gap: 15px;
            justify-content: space-between;
        }
    }

    .skillsGroup{
        display: grid;
        align-items: flex-start;
        row-gap: 1rem;
    }

    .skillsData{
        display: flex;
        column-gap: 0.5rem;
        @media (max-width: 450px){
            column-gap: 0;
        }
    }

    img{
        fill: green;
        margin-bottom: auto;
        @media (max-width: 450px){
            width: 15px;
            
        }
    }

    .skillName{
        font-size: ${FontSizes.cat};
        font-weight: 600;
        line-height: 18px;
        margin: 0;
        text-align: left;
    }

    p{
        font-size: ${FontSizes.rat};
        color: ${Colors.darkGrey};
        line-height: 20px;
    }

    @media(max-width: 450px){
        padding: 20px;

        .skillName{
            font-size: 14px;
        }

        p{
            max-width: 120px;
            line-height: 20px;
        }
    }
    
`
