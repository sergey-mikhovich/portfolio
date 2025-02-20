import styled, {css} from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const TabMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
    }
`;

const ListItem = styled.li`
`;

const Link = styled.a<{active?: boolean}>`
    font-weight: 500;
    font-size: 18px;
    
    &:hover {
        color: ${theme.colors.accent};
    }
    
    ${props => props.active && css<{active?: boolean}>`
        color: ${theme.colors.accent};
    `}
`;

export const S = {
    TabMenu,
    ListItem,
    Link,
}