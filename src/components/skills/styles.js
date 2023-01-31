import styled from "styled-components";
import { Box, Colors, FontSizes } from "../../styles/styles";


export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 420px);
    column-gap: 3rem;
    justify-content: center;
    @media (max-width: 1000px){
        grid-template-columns: repeat(1, 420px);;
        row-gap: 3rem;
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
    }

    .softSkillsBox{
        display: flex;
        justify-content: center;
        column-gap: 2.5rem;
    }

    .skillsGroup{
        display: grid;
        align-items: flex-start;
        row-gap: 1rem;
    }

    .skillsData{
        display: flex;
        column-gap: 0.5rem;
    }

    img{
        fill: green;
        margin-bottom: auto;
    }

    .skillName{
        font-size: ${FontSizes.cat};
        font-weight: 600;
        line-height: 18px;
        margin: 0;
        text-align: left;
    }

    span{
        font-size: ${FontSizes.rat};
        color: ${Colors.darkGrey};
    }
    
`
