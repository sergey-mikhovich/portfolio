import styled from "styled-components";

type MenuPropsType = {
    menuItems: Array<string>
    gap: string
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu gap={props.gap}>
            <ul>
                {props.menuItems.map(menuItem => (
                    <li>
                        <a href="#">{menuItem}</a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<{gap: string}>`
    ul {
        display: flex;
        gap: ${props => props.gap};
        justify-content: center;
        overflow-x: auto;
    }
`;