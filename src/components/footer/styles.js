import styled from "styled-components";
import { ReverseSection } from "../../styles/styles";

export const FooterSection = styled(ReverseSection)`
    
    gap: 100px;
    .artist{
        width: 40px;
        height: 40px;
    }

    @media(max-width: 1200px){
        gap: 30px;
    }

    @media(max-width: 1100px){
        gap: 20px;
    }
    @media(max-width: 1000px){
        padding-bottom: 30px;
    }
    @media(max-width: 500px){
        padding-bottom: 30px;
    }
    
`