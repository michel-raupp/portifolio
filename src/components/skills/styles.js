import styled from "styled-components";
import { Box, Colors, Container, FontSizes } from "../../styles/styles";

export const SkillCard = styled(Box)`
    width: 600px;
    height: 400px;

    h3{
        justify-content: center;
        color: ${Colors.black};
        line-height: normal;
        font-size: ${FontSizes.horse};
        font-weight: 600;
    }
`