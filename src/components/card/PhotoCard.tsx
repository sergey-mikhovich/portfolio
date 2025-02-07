import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../slyles/Theme.ts";

export type PhotoCardPropsType = {
    photo: string,
    title?: string,
    description?: string,
    linkText?: string
}

export const PhotoCard = (props: PhotoCardPropsType) => {
    return (
        <StyledPhotoCard>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <Photo src={props.photo} alt={'photo'}></Photo>
                <ContentWrapper>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                    <a href={'#'}>{props.linkText}</a>
                </ContentWrapper>
            </FlexWrapper>
        </StyledPhotoCard>
    );
};

const StyledPhotoCard = styled.div`
    max-width: 310px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
`;

const Photo = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

const ContentWrapper = styled.div`
    padding: 25px;
`;

const Title = styled.h3`
    
`;

const Description = styled.p`
    margin: 8px 0;
`;