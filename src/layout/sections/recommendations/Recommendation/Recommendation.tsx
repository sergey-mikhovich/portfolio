import styled from "styled-components";
import {Icon, IconPropsType} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {
    RecommendationProfile,
    RecommendationProfilePropsType
} from "../RecommendationProfile/RecommendationProfile.tsx";
import {theme} from "../../../../slyles/Theme.ts";

type RecommendationsPropsType = {
    icons: Array<IconPropsType>
    title: string
    description: string
    recommendationProfile: RecommendationProfilePropsType
}

export const Recommendation = (props: RecommendationsPropsType) => {
    return (
        <StyledRecommendation>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <Stars>
                    {props.icons.map(icon => (
                        <Icon iconId={icon.iconId} width={icon.width ? icon.width : "18px"} viewBox={icon.viewBox ? icon.viewBox : "0 0 18 18"}/>
                    ))}
                </Stars>
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
    max-width: 310px;
    width: 100%;
    min-height: 320px;
    background-color: ${theme.colors.primaryBg};
    padding: 20px 25px;
`;

const Stars = styled.div`
    display: flex;
    gap: 10px;
`

const Title = styled.h3`
    padding-top: 15px;
`;

const Description = styled.span`
    text-align: start;
    margin: 20px 0 30px;

    font-size: 15px;
    line-height: 24px;
    color: ${theme.colors.secondaryFont};
`;

