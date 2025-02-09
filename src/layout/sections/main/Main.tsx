import styled, {css} from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../slyles/Theme.ts";
import {Button} from "../../../components/button/Button.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Main = () => {
    return (
        <StyledMain>
                <Container>
                    <ForegroundStyledMain>
                        <MainContentWrapper>
                            <Name>I am Sergey Mikhovich</Name>
                            <MainTitle><AccentTitle>Front-end </AccentTitle>Developer</MainTitle>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Description>
                            <MainButton>
                                Hire Me
                                <Icon iconId={"rightArrow"} width={"16px"} viewBox={"0 0 16 16"}/>
                            </MainButton>
                        </MainContentWrapper>

                        <Photo src={photo} alt="photo" />
                    </ForegroundStyledMain>
                </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`

`;

const ForegroundStyledMain = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 470px;
    height: 100%;

    flex-wrap: wrap;
    background-color: ${theme.colors.primaryBg};
    padding: 0 60px;

    @media screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

const MainContentWrapper = styled.div`
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



