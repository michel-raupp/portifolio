import styled from "styled-components";
import { ReverseSection } from "../../styles/styles";

export const FooterSection = styled(ReverseSection)`
    gap: 100px;

    @media(max-width: 1200px){
        gap: 30px;
    }

    @media(max-width: 1100px){
        gap: 20px;
    }
    
`