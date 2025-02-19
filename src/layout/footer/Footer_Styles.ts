import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {theme} from "../../slyles/Theme.ts";

const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 70px 0;
`;

const Footer = styled.footer`
    @media screen and (max-width: 992px) {
        ${Container} {
            padding: 0;
        }
        
        ${LogoWrapper} {
            padding: 0 30px;
        }
    }
`;

const Map = styled.div`
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

    margin-bottom: 0;

    @media ${theme.media.largeTablet} {
        margin-bottom: 80px;
    }
`;

export const S = {
    LogoWrapper,
    Footer,
    Map,
    CopyrightWrapper,
    Copyright,
}