import styled from "styled-components";

export const Colors = {
    primary: '#3F5DE4',
    secondary:'#E4405F',
    terciary:'#733FE4',

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
`
export const Section = styled(Container)`
    gap: 100px;
    padding: 100px 0;
`

export const Coisas = styled(Column)`
    align-items: flex-start;
    justify-content: flex-start;
    width: 550px;
        p{
            font-weight: 400;
            font-size: ${FontSizes.cat};
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
    }
`
export const Box = styled(Container)`
    background-color: ${Colors.white};
    border: 2px solid ${Colors.grey};
    flex-direction: column;
    border-radius: 20px;
`