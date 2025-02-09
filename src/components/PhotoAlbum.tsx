import {PhotoCard, PhotoCardPropsType} from "./card/PhotoCard.tsx";
import styled from "styled-components";

type PhotoAlbumPropsType = {
    photos: Array<PhotoCardPropsType>
}

export const PhotoAlbum = (props: PhotoAlbumPropsType) => {
    return (
        <StyledPhotoAlbum>
            {props.photos.map((item) => (
                <PhotoCard
                    photo={item.photo}
                    title={item.title}
                    description={item.description}
                    linkText={item.linkText}
                    highlighted={item.highlighted} />
            ))}
        </StyledPhotoAlbum>
    );
};

const StyledPhotoAlbum = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
`;