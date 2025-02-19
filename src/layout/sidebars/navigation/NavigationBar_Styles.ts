import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const NavigationBar = styled.nav<{direction: string, padding: string}>`
    display: flex;
    flex-direction: ${props => props.direction};
    background-color: ${theme.colors.primaryBg};
    
    width: ${props => props.direction === "column" ? "105px" : "100%"};
    height: 100%;
    padding: ${props => props.padding};
`;

const NavMenuWrapper = styled.div<{direction: string}>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: center;
    flex-grow: 1;
`;

const ContrastButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: transparent;
`;

export const S = {
    NavigationBar,
    NavMenuWrapper,
    ContrastButton,
}