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
    z-index: 99999;
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: block;
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