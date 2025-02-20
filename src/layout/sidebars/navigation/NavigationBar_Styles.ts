import styled, {css} from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const NavigationBar = styled.nav<{direction: string, padding: string}>`
    display: flex;
    flex-direction: ${props => props.direction};
    background-color: ${theme.colors.primaryBg};
    
    padding: ${props => props.padding};
    
    ${props => props.direction === "column" && css`
        height: 100%;
        width: 105px;
    `}

    ${props => props.direction === "row" && css`
        width: 100%;
        height: 80px;
    `}
`;

const ContrastButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: transparent;
`;

export const S = {
    NavigationBar,
    ContrastButton,
}