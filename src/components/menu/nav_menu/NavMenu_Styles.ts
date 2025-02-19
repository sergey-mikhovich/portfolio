import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const NavMenu = styled.div<{gap: string, direction: string}>`
    width: 100%;
    ul {
        display: flex;
        flex-direction: ${props => props.direction};
        justify-content: center;
        align-items: center;
        gap: ${props => props.gap};
    }
`;

const ListItem = styled.li`
    
`;

const Link = styled.a.attrs((props) => ({
    title: props.title,
}))`
    color: ${theme.colors.secondaryFont};
    background-color: ${theme.colors.secondaryBg};
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;
    
    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryFont};
    }
`;

export const S = {
    NavMenu,
    ListItem,
    Link,
}