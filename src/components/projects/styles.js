import styled from "styled-components";
import { Box, Colors, Container, FontSizes } from "../../styles/styles";

//.projectsModal-content has a margin propertie, for a better responsiveness on mobile devices. But Illustrations.jsx isn't affected by this margin because it already has a INLINE margin on the line 102 of index.js

export const ProjectsContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(3, 270px);
    grid-gap: 2.4rem;
    
    @media(max-width: 1000px){
        grid-template-columns: repeat(2, 270px);
    }
    @media(max-width: 650px){
        grid-template-columns: repeat(1, 270px);
    }
`

export const ProjectsCard = styled(Box)`
    position: relative;
    justify-content: space-between;
    padding: 1.5rem;
    height: 224px;
    width: 224px;

    .projects_icon{
        display: block;
        margin-bottom: 20px;
    }

    .projectsTitle{
        text-align: left;
        color: ${Colors.black};
        line-height: normal;
        font-size: ${FontSizes.wolf};
        font-weight: 600;
    }

    .technology-used{
        width: 40px;
        height: 40px;
        margin-right: 5px;
        bottom: 0;
    }

    .view-more{
        color: ${Colors.black};
        font-size: ${FontSizes.cat};
        display: inline-flex;
        align-items: center;
        column-gap: 0.25rem;
        cursor: pointer;
        pointer-events: auto; 
        transition: 0.5s;

        img{
            width: 20px;
            height: 20px;
            transition: 0.5s;
        }
    }
    .view-more:hover{
        transform: translateX(0.5rem);
    }

    .projectsModal{
        overflow-y: auto;
        position: fixed;
        inset: 0;
        z-index: 99;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 0.5rem;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
    }

    .projectsModal-content{
        max-width: 800px;
        position: relative;
        background-color: ${Colors.white};
        padding: 2.5rem 3rem;
        border-radius: 20px;
        margin-top: 100px;
        pointer-events: auto; 
        transition: 0.5s ease-in-out;
        @media(max-width: 600px){
            padding: 2rem 2rem;
        }
        @media(max-width: 450px){
            padding: 2rem 1rem;
        }

    }

    .close-modal{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 40px;
        height: 40px;
        cursor: pointer;
        pointer-events: auto; 
        @media(max-width: 380px){
            width: 30px;
            height: 30px;
            top: 2rem;
            right: 1rem;
        }
    }

    .projectsModal-title,
    .projectsModal-description{
        text-align: center;
    }

    .projectsModal-title{
        color: ${Colors.black};
        line-height: normal;
        font-size: ${FontSizes.wolf};
        font-weight: 600;
        margin-bottom: 5px;

        @media(max-width: 600px){
            margin-bottom: 0;
            font-size: ${FontSizes.cat};
        }
    }

    .projectsModal-description{
        color: ${Colors.darkGrey};
        font-size: ${FontSizes.cat};
        font-weight: 400;
        margin-bottom: 25px;

        @media(max-width: 600px){
            margin-bottom: 25px;
            font-size: ${FontSizes.rat};
        }
    }
    .active-modal{
        visibility: visible;
        opacity: 1;
    }
`

export const ProjectsSection = styled(Container)` 
    .backgroundModal{     
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 98;
        width: 100%;
        min-height: 100vh;
        transition: 0.5s;
        background-color: rgb(0, 0, 0, 0.5);
        visibility: hidden;
        opacity: 0;
    }
    .active{
        visibility: visible;
        opacity: 1;
}`
