import {
    RecommendationProfile,
    RecommendationProfilePropsType
} from "../RecommendationProfile/RecommendationProfile.tsx";
import * as React from "react";
import {S} from "./Recommendation_Styles.ts";
import {Icon} from "../../../../components/icon/Icon.tsx";

type RecommendationsPropsType = {
    rating: number
    title: string
    description: string
    profile: RecommendationProfilePropsType
}

export const Recommendation: React.FC<RecommendationsPropsType> = (props: RecommendationsPropsType) => {
    return (
        <S.Recommendation>
            <S.Stars>
                {
                    Array(props.rating).map((_, index) => (
                        <Icon
                            key={index}
                            iconId={"star"}
                            width={"18px"}
                            viewBox={"0 0 18 18"}
                        />
                    ))
                }
            </S.Stars>
            <S.Title>{props.title}</S.Title>
            <S.Description>{props.description}</S.Description>
            <RecommendationProfile
                photo={props.profile.photo}
                name={props.profile.name}
                profession={props.profile.profession}/>
        </S.Recommendation>
    );
};

