import styled, {css} from "styled-components";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../slyles/Theme.ts";
import {Button} from "../../../components/button/Button.tsx";

const Main = styled.section`
    @media screen and (max-width: 992px) {
        ${Container} {
            padding: 0;
        }
    }
`;

const Foreground = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 470px;
    height: 100%;

    position: relative;

    flex-wrap: wrap;
    background-color: ${theme.colors.primaryBg};
    padding: 0 60px;

    @media screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

const ContentWrapper = styled.div`
    padding: 100px 0 0;

    @media screen and (max-width: 768px) {
        padding: 100px 20px 0;
    }
`

const cssTitle = css`
    font-weight: 700;
    font-size: 48px;
`;

const Name = styled.h2`
    ${cssTitle}
`;

const MainTitle = styled.h1`
    ${cssTitle};
`;

const AccentTitle = styled.span`
    ${cssTitle};
    color: ${theme.colors.accent};
    line-height: 1;
`;

const Description = styled.p`
    max-width: 410px;
    font-size: 16px;
    margin: 25px 0;
`;

const Photo = styled.img`
    width: 320px;
    height: 450px;
    object-fit: cover;
    align-self: end;
`;

const MainButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 10px;
    
    padding: 16px 32px;
    font-weight: 500;
    font-size: 16px;
    border-radius: 5px;
`;

const MenuWrapper = styled.div`
    position: absolute;
    
    padding: 30px;
    left: 0;
    top: 0;
    
    display: none;

    @media screen and (max-width: 1130px) {
        display: block;
    }
`;

export const S = {
    Main,
    Foreground,
    ContentWrapper,
    Name,
    MainTitle,
    AccentTitle,
    Description,
    MainButton,
    Photo,
    MenuWrapper,
}