import {PhotoCard, PhotoCardPropsType} from "../card/photo_card/PhotoCard.tsx";
import styled from "styled-components";
import * as React from "react";

type PhotoAlbumPropsType = {
    photos: Array<PhotoCardPropsType>
}

export const PhotoAlbum: React.FC<PhotoAlbumPropsType> = (props: PhotoAlbumPropsType) => {
    return (
        <StyledPhotoAlbum>
            {props.photos.map((item) => (
                <PhotoCard
                    photo={item.photo}
                    title={item.title}
                    description={item.description}
                    linkText={item.linkText} />
            ))}
        </StyledPhotoAlbum>
    );
};

const StyledPhotoAlbum = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    
    &::after {
        content: "";
        width: 310px;
        flex-grow: 1;
    }
`;