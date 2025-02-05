import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";

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
                <Title>{props.title || ''}</Title>
                <p>{props.description || ''}</p>
                <a href={'#'}>{props.linkText || ''}</a>
            </FlexWrapper>
        </StyledPhotoCard>
    );
};

const StyledPhotoCard = styled.div`
    max-width: 310px;
    width: 100%;
    border: solid 1px black;
`;

const Photo = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

const Title = styled.h3`
`;