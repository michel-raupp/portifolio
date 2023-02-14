import styled from "styled-components";
import { Colors, FontSizes } from "../../styles/styles";

export const Logo = styled.p`
  font-size: ${FontSizes.cat};
  color: ${Colors.black};
  font-weight: 600;
  @media (max-width: 1000px){
    font-size: ${FontSizes.horse};
  }
`

export const NavbarSection = styled.nav`
    z-index: 97;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${Colors.background};
    padding: 20px 80px;
    border-bottom: 1px solid ${Colors.darkGrey};

    #mobile {
        display: none;
    }

        @media screen and (max-width: 1000px) {
            padding: 21px 0;
            justify-content: space-around;
            border-bottom: none;

            #navbar {
                border-bottom: 1px solid ${Colors.darkGrey};
                transition: 0.5s ease-in-out;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                position: absolute;
                top: 90px;
                padding: 0;
                right: 0px;
                width: 100%;
                height: 0;
            }

            .first{
                margin-top: 50px;
            }
            #navbar li {
                visibility: hidden;
                //overflow: hidden;  /* Hide the element content, while height = 0 */
                height: auto;
                opacity: 0;
                transition: height 0ms 4000ms, opacity 400ms 0ms;
                margin-bottom: 30px;
            }
            #mobile {
                display: block;
            }

            #navbar.active {
                min-height: 100vh;
                background: linear-gradient(180deg, rgba(247,247,247,1) 0%, rgba(247,247,247,0.7) 50%, rgba(247,247,247,0) 100%);
                backdrop-filter: blur(20px);
                li {
                    visibility: visible;
                    height: auto; opacity: 1;
                    transition: height 0ms 0ms, opacity 400ms 0ms;
                }
            }
        }

    a{
        cursor: pointer;
    }
`

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center; 

    li {
        margin-left: 50px;
        list-style: none;
        position: relative;    

        @media screen and (max-width: 1000px) {
            margin-left: 10%;
        }
    }

    a {
        text-decoration: none;
        @media screen and (max-width: 1000px) {
            text-shadow: -1px 1px 0 #fff,
                        1px 1px 0 #fff,
                        1px -1px 0 #fff,
                        -1px -1px 0 #fff;
        }
        p{
            transition: ease-in-out .3s;
            font-size: 16px;
            font-weight: 400;
            color: ${Colors.darkGrey};
            font-size: ${FontSizes.wolf};
        }
    }

    li a:hover{ 
        p{
        scale: 1.1;  
        font-weight: 600;
        color: ${Colors.black};} 
        
    }

    a:hover::after{ 
        content: "";
        width: 60%;
        height: 2px;
        background: ${Colors.darkGrey};
        position: absolute;
        bottom: 0px;
        left: 1px;
    }
`


