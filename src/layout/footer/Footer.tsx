import styled from "styled-components";
import imgMap from "../../assets/images/map.webp"
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledMap src={imgMap} alt={'map'}></StyledMap>
            <FlexWrapper justify="space-evenly" wrap={"wrap"}>
                <Icon iconId={'footerLogo1'} width={'140px'} viewBox={'0 0 140 140'}/>
                <Icon iconId={'footerLogo2'} width={'140px'} viewBox={'0 0 140 140'}/>
                <Icon iconId={'footerLogo3'} width={'140px'} viewBox={'0 0 140 140'}/>
                <Icon iconId={'footerLogo4'} width={'140px'} viewBox={'0 0 140 140'}/>
            </FlexWrapper>
            <FlexWrapper justify={'center'}>
                <Icon iconId={'copyright'}/>
                <Copyright>@ 2025 Sergey Mikhovich. All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`;

const StyledMap = styled.img`
    max-width: calc(100vw - (100vw - 100%));
`;

const Copyright = styled.small`
    
`;