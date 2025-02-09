import {theme} from "../../slyles/Theme.ts";
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

const iconWidth = "52px"
const iconViewBox = "0 0 52 52"

export type PhotoCardPropsType = {
    photo: string,
    title?: string,
    description?: string,
    linkText?: string,
    highlighted?: boolean
}

export const PhotoCard = (props: PhotoCardPropsType) => {
    return (
        <StyledPhotoCard>
            { props.highlighted ?
                (
                    <PhotoWrapper>
                        <Photo src={props.photo} alt={'photo'}/>
                        <IconWrapper>
                            <Icon iconId={"plus"} width={iconWidth} viewBox={iconViewBox}/>
                        </IconWrapper>
                    </PhotoWrapper>
                ) : (
                    <Photo src={props.photo} alt={'photo'}/>
                )
            }
            <ContentWrapper hidden={!props.title && !props.description && !props.linkText}>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <LinkWrapper>
                    <Link href={'#'}>{props.linkText}</Link>
                    <Icon iconId={"rightAngleBracket"} width={"10px"} viewBox={"0 0 10 10"}/>
                </LinkWrapper>
            </ContentWrapper>
        </StyledPhotoCard>
    );
};

const StyledPhotoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    max-width: 310px;
    min-height: 300px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
`;

const PhotoWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(255, 180, 0, 0.95);

        position: absolute;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    
    transform: translate(-50%, -50%);
    
    top: 50%;
    left: 50%;
`;

const Photo = styled.img`
    width: 310px;
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

const LinkWrapper = styled.div`
    display: flex;
    gap: 10px;
    
    align-items: center;
`;

const Link = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.accent}
`;