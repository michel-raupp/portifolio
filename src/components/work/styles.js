import styled from "styled-components";
import { Colors, Column, Container, FontSizes } from "../../styles/styles";

export const WorkContainer = styled(Container)`
    padding: 0 20px;
    max-width: 1100px;

    .container{
        display: flex;
        gap: 50px;

        @media(max-width: 850px){
            gap: 20px;
        }

        @media(max-width: 700px){
            flex-direction: column;
         }
    }

    .infos{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title{
        top: 0;
        display: flex;
        justify-content: space-between;
        color: ${Colors.black};
        line-height: normal;
        font-size: ${FontSizes.wolf};
        font-weight: 600;
        margin-bottom: 15px;

        @media(max-width: 850px){
           display: none;
        }
    }

    p{
        font-size: ${FontSizes.cat};
    }
    
    .date{
        font-size: ${FontSizes.cat};
        text-align: right;
    }
    
    
`

export const WorkImg = styled(Column)`
        img{
            border: 2px solid ${Colors.grey};
            border-radius: 20px;
            width: 300px;
            height: 300px;
        }
        
        .titleV2{
            display: none;
            margin-top: 15px;
            color: ${Colors.black};
            line-height: normal;
            font-size: ${FontSizes.wolf};
            font-weight: 600;
        }

        @media(max-width: 850px){
            .titleV2{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            img{
                width: 250px;
                height: 250px;
            }
            }
            @media(max-width: 850px){
            .titleV2{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            img{
                width: 250px;
                height: 250px;
            }
        }   

        @media(max-width: 700px){
            align-items: center;

            img{
                max-width: 350px;
                max-height: 350px;
                width: 100%;
                height: 100%;
            }
        }      

`