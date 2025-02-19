import {Icon} from "../../icon/Icon.tsx";
import {S} from "./PhotoCard_Styles.ts";
import * as React from "react";

const iconWidth = "52px"
const iconViewBox = "0 0 52 52"

export type PhotoCardPropsType = {
    photo: string,
    title?: string,
    description?: string,
    linkText?: string
}

export const PhotoCard: React.FC<PhotoCardPropsType> = (props: PhotoCardPropsType) => {
    return (
        <S.PhotoCard>
            <S.PhotoWrapper>
                <S.Photo src={props.photo} alt={'photo'}/>
                <S.IconButton>
                    <Icon iconId={"plus"} width={iconWidth} viewBox={iconViewBox}/>
                </S.IconButton>
            </S.PhotoWrapper>
            <S.ContentWrapper hidden={!props.title && !props.description && !props.linkText}>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <S.ActionButton>
                    <S.Link href={'#'}>{props.linkText}</S.Link>
                    <Icon iconId={"rightAngleBracket"} width={"10px"} viewBox={"0 0 10 10"}/>
                </S.ActionButton>
            </S.ContentWrapper>
        </S.PhotoCard>
    );
};