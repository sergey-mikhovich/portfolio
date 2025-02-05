import styled from "styled-components";
import {IconMenu} from "../../../components/menu/IconMenu.tsx";

export const NavigationSidebar = () => {
    return (
        <StyledNavigation>
            <IconMenu items={[
                { iconId: 'home', href: '#' },
                { iconId: 'file', href: '#' },
                { iconId: 'cv', href: '#' },
                { iconId: 'portfolio', href: '#' },
                { iconId: 'blog', href: '#' },
                { iconId: 'contact', href: '#' },
            ]}/>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    max-width: 100px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    min-height: 100vh;
    background-color: #FAFAFA;
`