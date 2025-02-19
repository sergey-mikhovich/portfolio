import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const TabMenu = styled.nav`
    ul {
        display: flex;
        gap: 40px;
    }
`;

const ListItem = styled.li`
`;

const Link = styled.a`
    font-weight: 500;
    font-size: 18px;
    
    &:hover {
        color: ${theme.colors.accent};
    }
`;

export const S = {
    TabMenu,
    ListItem,
    Link,
}