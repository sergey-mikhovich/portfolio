import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="#">All Categories</a>
                </li>
                <li>
                    <a href="#">UI Design</a>
                </li>
                <li>
                    <a href="#">Web Templates</a>
                </li>
                <li>
                    <a href="#">Logo</a>
                </li>
                <li>
                    <a href="#">Branding</a>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        list-style-type: none;
    }
`;