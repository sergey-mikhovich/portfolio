import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../slyles/Theme.ts";
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
                <Container>
                    <ForegroundStyledMain>
                        <FlexWrapper direction={'column'}>
                            <Name>I am Sergey Mikhovich</Name>
                            <MainTitle>Front-end Developer</MainTitle>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Description>
                            <Button>Hire Me</Button>
                        </FlexWrapper>

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
    align-items: center;
    flex-wrap: wrap;
    background-color: ${theme.colors.primaryBg};
    padding: 0 60px;
`;

const Name = styled.h2`
    font-weight: bold;
    font-size: 48px;
`;

const MainTitle = styled.h1`
    font-weight: bold;
    font-size: 48px;
`;

const Description = styled.p`
    max-width: 410px;
    font-size: 16px;
    color: ${theme.colors.secondaryFont};
    margin: 18px 0;
    line-height: 24px;
`;

const Photo = styled.img`
    width: 325px;
    height: 460px;
    object-fit: cover;
`;



