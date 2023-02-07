import styled from "styled-components";
import { Colors, FontSizes } from "../../styles/styles";

// export const NavbarContent = styled(Container)`
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 80px;
//     z-index: 99;
//     background: ${Colors.white};

//     .navbar{
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         width: auto;
//     #mobile {
//         display: none;
//     }

//     #navbar{
//         z-index: 4;
//     }

//     #mobile i {
//         color: ${Colors.white};
//         align-items: center;
//     }

//     @media screen and (max-width: 768px) {
//         padding: 20px 0;
//         justify-content: space-around;
        
//         #navbar {
//             transition: 0.5s ease-in-out;
//             flex-direction: column;
//             justify-content: flex-start;
//             align-items: flex-start;
//             position: absolute;
//             top: 80px;
//             right: 0px;
//             width: 100%;
//             height: 0;
//             background: ${Colors.secondary};
//             padding: 40px 0 0 0px;
//         }
//         #navbar li {
//             overflow: hidden;  /* Hide the element content, while height = 0 */
//             height: 0;
//             opacity: 0;
//             transition: height 0ms 400ms, opacity 400ms 0ms;
//             margin-bottom: 50px;
//         }
//         #mobile {
//             display: block;
//         }
//         #mobile i {
//             font-size: 24px;
//             cursor: pointer;
//         }
//         #navbar.active {
//             height: 50vh;
//             li {
//                 height: auto; opacity: 1;
//                 transition: height 0ms 0ms, opacity 600ms 0ms;
//             }
//         }
//     }
// }

//     .logo{
//         font-size: ${FontSizes.wolf};
//         font-weight: 600;
//         margin-right: 450px;
//     }

//     ul{
//         display: flex;
//         justify-content: space-between;
//         justify-self:flex-end;
//         column-gap: 2.5rem;

//     }
//     p{
//         transition: ease-in-out .3s;
//         font-size: ${FontSizes.cat};
//     }

//     a{
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
        
//         :hover{
//             p{
                
//                 font-weight: 600;
//                 scale: 1.1;
//             }
//         }
//     }


//     img{
//         display: none;
//         width: 30px;
//         height: 30px;
//     }
    
// `

export const Logo = styled.p`
  font-size: ${FontSizes.cat};
  color: ${Colors.black};
  font-weight: 600;
  @media (max-width: 1000px){
    font-size: ${FontSizes.horse};
  }
`

export const NavbarSection = styled.nav`
    z-index: 98;
    position: sticky;
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
                height: 100vh;
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
        text-shadow: -1px 1px 0 #fff,
                      1px 1px 0 #fff,
                      1px -1px 0 #fff,
                     -1px -1px 0 #fff;
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


