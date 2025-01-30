import styled from "styled-components";
import {Icon, IconPropsType} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {
    RecommendationProfile,
    RecommendationProfilePropsType
} from "../RecommendationProfile/RecommendationProfile.tsx";

type RecommendationsPropsType = {
    icons: Array<IconPropsType>
    title: string
    description: string
    recommendationProfile: RecommendationProfilePropsType
}

export const Recommendation = (props: RecommendationsPropsType) => {
    return (
        <StyledRecommendation>
            <FlexWrapper direction={"column"}>
                <FlexWrapper>
                    {props.icons.map(icon => (
                        <Icon iconId={icon.iconId} width={icon.width} viewBox={icon.viewBox}/>
                    ))}
                </FlexWrapper>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <RecommendationProfile
                    photo={props.recommendationProfile.photo}
                    name={props.recommendationProfile.name}
                    profession={props.recommendationProfile.profession}/>
            </FlexWrapper>
        </StyledRecommendation>
    );
};

const StyledRecommendation = styled.div`
    width: 30%;
    background-color: antiquewhite;
    border: solid black;
`;

const Title = styled.h3`
    
`;

const Description = styled.p`
    
`;

