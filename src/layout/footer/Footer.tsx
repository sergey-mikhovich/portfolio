import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../slyles/Theme.ts";

const logoWidth= "140px"
const logoViewBox = "0 0 140 140"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledMap>
                    <iframe
                        src="https://yandex.by/map-widget/v1/?ll=27.727503%2C53.882847&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDExNxIc0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiIKDQ5y3EEVZpxXQg%2C%2C&z=11">
                    </iframe>
                </StyledMap>
                <LogoWrapper>
                    <Icon iconId={'footerLogo1'} width={logoWidth} viewBox={logoViewBox}/>
                    <Icon iconId={'footerLogo2'} width={logoWidth} viewBox={logoViewBox}/>
                    <Icon iconId={'footerLogo3'} width={logoWidth} viewBox={logoViewBox}/>
                    <Icon iconId={'footerLogo4'} width={logoWidth} viewBox={logoViewBox}/>
                </LogoWrapper>
                <CopyrightWrapper>
                    <Copyright><span>©</span>2025 All Rights Reserved.</Copyright>
                </CopyrightWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`;

const StyledMap = styled.div`
    position:relative;
    overflow:hidden;
    
    a {
        color:#eee;
        font-size:12px;
        position:absolute;
        top:0;
    }
    
    iframe {
        width: 100%;
        min-height: 300px;
        position: relative;
        border: none;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 70px 0;
`;

const CopyrightWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px 40px;
    background-color: ${theme.colors.primaryBg}
`;

const Copyright = styled.small`
    display: flex;
    font-size: 15px;
    line-height: 24px;
    align-items: center;
    opacity: 0.8;
    
    span {
        font-size: 1.7em;
        padding-right: 10px;
    }
`;