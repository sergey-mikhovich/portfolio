import styled, {css} from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const MobileMenu = styled.div`
    
`;

const BurgerButton = styled.button`
    width: 40px;
    height: 40px;
    position: relative;
    background-color: transparent;
    
    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 50%;
        left: 50%;
        
        transform: translate(-50%, -50%);
        
        
        &::before {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(-8px);
            position: absolute;
        }
        
        &::after {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            transform: translateY(8px);
            position: absolute;
        }
    }
`;

const Popup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
    transform: translateX(-110%);
    transition: ${theme.animation.transition_0_4_easy_in_out};
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateX(0);
    `}
    
    aside {
        width: 375px;
    }
`;

export const S ={
    MobileMenu,
    BurgerButton,
    Popup,
}