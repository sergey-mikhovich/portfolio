import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const IconMenu = styled.menu<{direction?: string, justify?: string, align?: string, gap?: string}>`
    width: 100%;
    ul {
        display: flex;
        flex-direction: ${props => props.direction || "column"};
        justify-content: ${props => props.justify || "center"};;
        align-items: ${props => props.align || "center"};;
        gap: ${props => props.gap || "0px"};
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
`;

export const S = {
    IconMenu,
    ListItem,
    Link
}