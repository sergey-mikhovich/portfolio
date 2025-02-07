import styled from "styled-components";
import {IconMenu} from "../../../components/menu/IconMenu.tsx";
import {theme} from "../../../slyles/Theme.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

const iconWidth = "18px"
const iconViewBox = "0 0 18 18"

export const NavigationSidebar = () => {
    return (
        <StyledNavigation>
            <TopIconWrapper>
                <Icon iconId={"contrast"} width={"30px"} viewBox={"0 0 30 30"}/>
            </TopIconWrapper>
            <IconMenu items={[
                { iconId: 'home', href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'file', href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'cv', href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'portfolio', href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'blog', href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'contact', href: '#', width: iconWidth, viewBox: iconViewBox },
            ]}/>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    background-color: ${theme.colors.tertiaryBg};
    max-width: 110px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    min-height: 100vh;
    padding: 20px;
`;

const TopIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 20px 0;
`;