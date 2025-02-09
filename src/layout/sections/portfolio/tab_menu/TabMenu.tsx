import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";

type TabMenuPropsType = {
    items: Array<string>
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.items.map((item, index) => (
                    <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                ))}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        gap: 40px;
        overflow-x: auto;
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