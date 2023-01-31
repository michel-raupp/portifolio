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
        bottom: 0;
    }

    .view-more{
        color: ${Colors.secondary};
        font-size: ${FontSizes.cat};
        display: inline-flex;
        align-items: center;
        column-gap: 0.25rem;
        cursor: pointer;
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
        overflow-y:scroll;
        overflow-x:hidden;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0%;
        background-color: rgb(0, 0, 0, 0.5);
        z-index: 2;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
    }

    .projectsModal-content{
        width: 800px;
        position: relative;
        background-color: ${Colors.white};
        padding: 2.5rem;
        border-radius: 20px;

        @media(max-width: 600px){
            padding: 2rem 1rem;
        }
        @media(max-width: 450px){
            margin-top: 620px;//this margin doesn't work on Illustrations.jsx due the INLINE fixed margin on the line 102 of index.js
        }
        @media(max-width: 380px){
            margin-top: 400px;
        }
    }

    .close-modal{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 40px;
        height: 40px;
        cursor: pointer;

        @media(max-width: 600px){
            top: 1rem;
            right: 1rem;
            width: 25px;
            height: 25px;
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