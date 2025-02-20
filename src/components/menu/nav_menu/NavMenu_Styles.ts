import styled, {css} from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const NavMenu = styled.menu<{direction?: string, justify?: string, align?: string, gap?: string}>`
    ul {
        display: flex;
        flex-direction: ${props => props.direction || "column"};
        justify-content: ${props => props.justify || "center"};;
        align-items: ${props => props.align || "center"};;
        gap: ${props => props.gap || "0px"};
    }

    ${props => props.direction === "column" && css`
        margin: auto 0;
    `}

    ${props => props.direction === "row" && css`
        margin: 0 auto;
    `}
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

    transition: ${theme.animation.transition_0_4_easy_in_out};

    &:hover {
        transform: scale(1.3);
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryFont};
    }
`;

export const S = {
    NavMenu,
    ListItem,
    Link
}