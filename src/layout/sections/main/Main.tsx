import styled from "styled-components";
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-around'} align={'center'}>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Name>I am Sergey Mikhovich</Name>
                    <MainTitle>Front-end Developer</MainTitle>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Description>
                </FlexWrapper>

                <Photo src={photo} alt="photo" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f6;
`;

const Name = styled.h2`

`;

const MainTitle = styled.h1`

`;

const Description = styled.p`

`;

const Photo = styled.img`
    width: 325px;
    height: 460px;
    object-fit: cover;
`;



