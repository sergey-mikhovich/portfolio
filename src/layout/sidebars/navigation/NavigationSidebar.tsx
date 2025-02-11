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
                { iconId: 'home', title: "Home", href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'file', title: "File", href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'cv', title: "CV", href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'portfolio', title: "Portfolio", href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'blog', title: "Blog", href: '#', width: iconWidth, viewBox: iconViewBox },
                { iconId: 'contact', title: "Contact", href: '#', width: iconWidth, viewBox: iconViewBox },
            ]}/>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    background-color: ${theme.colors.primaryBg};
    max-width: 110px;
    height: 100%;
    padding: 20px;
`;

const TopIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 20px 0;
`;