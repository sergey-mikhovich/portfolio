import styled, {css} from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../slyles/Theme.ts";
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
                <Container>
                    <ForegroundStyledMain>
                        <MainContentWrapper>
                            <Name>I am Sergey Mikhovich</Name>
                            <MainTitle><AccentTitle>Front-end </AccentTitle>Developer</MainTitle>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Description>
                            <Button>Hire Me</Button>
                        </MainContentWrapper>

                        <Photo src={photo} alt="photo" />
                    </ForegroundStyledMain>
                </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: ${theme.colors.secondaryBg};
`;

const ForegroundStyledMain = styled.div`
    display: flex;
    justify-content: space-around;

    flex-wrap: wrap;
    background-color: ${theme.colors.primaryBg};
    padding: 0 60px;

    @media screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 0 0;

    @media screen and (max-width: 768px) {
        padding: 100px 20px 0;
    }
`

const Name = styled.h2`
    font-weight: bold;
    font-size: 48px;
`;

const cssTitle = css`
    font-weight: bold;
    font-size: 48px;
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
    color: ${theme.colors.secondaryFont};
    margin: 18px 0;
    line-height: 24px;
`;

const Photo = styled.img`
    width: 320px;
    height: 450px;
    object-fit: cover;
`;



