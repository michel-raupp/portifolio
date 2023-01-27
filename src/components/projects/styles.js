import styled from "styled-components";
import { Box, Colors, Container, FontSizes } from "../../styles/styles";

export const ProjectsContainer = styled(Container)`
    grid-template-columns: repeat(3, 270px);
    justify-content: center;
    column-gap: 1.9rem;
    margin-top: 50px;
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
    }

    .close-modal{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 40px;
        height: 40px;
        cursor: pointer;
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
    }

    .projectsModal-description{
        color: ${Colors.darkGrey};
        font-size: ${FontSizes.cat};
        font-weight: 400;
        margin-bottom: 25px;
    }

    .active-modal{
        visibility: visible;
        opacity: 1;
    }
`