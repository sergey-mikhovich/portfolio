import styled from "styled-components";
import imgMap from "../../assets/images/map.webp"
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../slyles/Theme.ts";

const logoWidth= "140px"
const logoViewBox = "0 0 140 140"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <StyledMap src={imgMap} alt={'map'}></StyledMap>
                <LogoWrapper>
                    <Icon iconId={'footerLogo1'} width={logoWidth} viewBox={logoViewBox}/>
                    <Icon iconId={'footerLogo2'} width={logoWidth} viewBox={logoViewBox}/>
                    <Icon iconId={'footerLogo3'} width={logoWidth} viewBox={logoViewBox}/>
                    <Icon iconId={'footerLogo4'} width={logoWidth} viewBox={logoViewBox}/>
                </LogoWrapper>
                <CopyrightWrapper>
                    <Icon iconId={'copyright'} width={"24px"} viewBox={'0 0 24 24'}/>
                    <Copyright>2025 All Rights Reserved.</Copyright>
                </CopyrightWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`;

const StyledMap = styled.img`
    max-width: calc(100vw - (100vw - 100%));
    min-height: 300px;
    object-fit: cover;
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
    min-height: 60px;
    padding: 20px 40px;
    background-color: ${theme.colors.primaryBg}
`;

const Copyright = styled.small`
    font-size: 15px;
    line-height: 24px;
    text-align: center;
`;