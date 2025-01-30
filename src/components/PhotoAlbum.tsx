import {PhotoCard, PhotoCardPropsType} from "./card/PhotoCard.tsx";
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.tsx";

type PhotoAlbumPropsType = {
    photos: Array<PhotoCardPropsType>
}

export const PhotoAlbum = (props: PhotoAlbumPropsType) => {
    return (
        <StyledPhotoAlbum>
            <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                {props.photos.map(item => (
                    <PhotoCard
                        photo={item.photo}
                        title={item.title}
                        description={item.description}
                        linkText={item.linkText}/>
                ))}
            </FlexWrapper>
        </StyledPhotoAlbum>
    );
};

const StyledPhotoAlbum = styled.div`
`;