import styled from "styled-components";

export const Colors = {
    primary: '#3F5DE4',
    secondary:'#F02E9A',
    terciary:'#9F2EF0',
    green: '#98CE00',
    red: '#F02E36',

    menu: '#61727F',

    darkGrey:'#888888',
    background: '#F7F7F7',
    grey: '#D9D9D9',
    black: '#2A2A2A',
    white: '#fff',
}

export const FontSizes = {

    //the taller the animal, the larger the font-size is! I though it's better in this way than "small, medium , large" or "xs, xl..."

    giraffe: '70px',
    hippo: '30px',
    horse: '24px',
    wolf: '18px',
    cat: '16px',
    rat: '14px',
}

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: row;
    margin: 0;
    padding: 0;
    position: relative;
`
export const Column = styled(Container)`
    flex-direction: column;

    hr{
        margin:30px 0;
        width: 95%;
        align-self: center;

        @media(max-width: 450px){
            margin:15px 0;
        }
    }
`
export const Section = styled(Container)`
    gap: 100px;
    padding: 100px 0;
    align-self: center;
    max-width: auto;

    @media(max-width: 1100px){
        gap: 50px;
    }

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const ReverseSection = styled(Section)`
    @media (max-width: 1000px){
            flex-direction: column-reverse;
    }     
`

export const HeaderSection = styled(ReverseSection)`
    padding-top: 250px;

    @media (max-width: 1000px){
        padding-top: 170px;
    } 
    @media (max-width: 550px){
        padding-top: 130px;
    } 
`

export const Coisas = styled(Column)`
    align-items: flex-start;
    justify-content: flex-start;
    width: auto;
    height: auto;
    max-width: 550px;
        p{
            max-width: 450px;
            width:100%;
            font-weight: 400;
            font-size: ${FontSizes.cat};
        }

        @media (max-width: 1000px){
            max-width: 90%;
            align-items:center;
            justify-content: center;
            text-align: center;
        }
        @media (max-width: 380px){
            p{
            font-size: ${FontSizes.rat};
        }
    }
    .footer-title{
        font-weight: 700;
        font-size: 63px;
        line-height: normal;
        
        @media (max-width: 550px){
            font-size: 50px;
        }
        @media (max-width: 450px){
            font-size: 42px;
        }

        @media (max-width: 380px){
            font-size: 35px;
        }
    }
`

export const SectionTitle = styled(Container)`
    margin-bottom: 50px;
    flex-direction: column;
    align-items: center;
    h2{
        line-height: normal;
        font-size: 36px;
        font-weight: 700;
    }
    h3{
        margin-top: 15px;
        color: ${Colors.darkGrey};
        line-height: normal;
        font-size: ${FontSizes.wolf};
        font-weight: 400;
        max-width: 90%;
        text-align: center;
    }
`
export const Box = styled(Container)`
    background-color: ${Colors.white};
    border: 2px solid ${Colors.grey};
    flex-direction: column;
    border-radius: 20px;
`