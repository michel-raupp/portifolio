import styled from "styled-components";
import { Colors, Column, Container, FontSizes } from "../../styles/styles";

export const WorkContainer = styled(Container)`
    padding: 0 50px;
    max-width: 1100px;

    .container{
        display: flex;
        gap: 50px;

        @media(max-width: 500px){
            gap: 0px;
        }
    }

    .infos{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media(max-width: 900px){
    padding: 0 30px;
    align-items: center;
        .container{
            flex-direction: column;
        }
        .infos{
            max-width: 500px;
        }
    }

    .title{
        top: 0;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        line-height: normal;
        font-size: ${FontSizes.wolf};
        font-weight: 600;
        h3{
            color: ${Colors.black};  
        }

        p{
            font-size: ${FontSizes.wolf};
            color: ${Colors.darkGrey};    
        }

        @media(max-width: 500px){
           display: none;
        } 
    }

    .date{
        text-align: right;
        color: ${Colors.darkGrey};
        margin-top: 20px;
    }

    p, .date{
        font-size: ${FontSizes.cat};
        @media(max-width: 380px){
            font-size: ${FontSizes.rat};
        }
    }   
`

export const WorkImg = styled(Column)`
        img{
            border: 2px solid ${Colors.grey};
            border-radius: 20px;
            width: 300px;
            height: 300px;
        }

        @media(max-width: 900px){
            img{
                align-self: center;
                max-width: 350px;
                max-height: 350px;
                width: 100%;
                height: 100%;
            }
        } 
        .titleV2{
                display: none;
        }
        @media(max-width: 500px){
            .titleV2{
                display: flex;
                flex-direction: column;
                margin: 20px 0;
                line-height: normal;
                text-align: left;
                font-weight: 600;

                h3{
                    font-size: ${FontSizes.horse};
                    color: ${Colors.black};  
                    line-height: 25px;
                }

                p{
                    font-size: ${FontSizes.wolf};
                    color: ${Colors.darkGrey};    
                }
            }
        }

`