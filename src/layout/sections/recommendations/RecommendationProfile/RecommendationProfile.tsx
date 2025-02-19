import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import {S} from "./RecommendationProfile_Styles.ts";
import * as React from "react";

export type RecommendationProfilePropsType = {
    photo: string,
    name: string,
    profession: string,
}

export const RecommendationProfile: React.FC<RecommendationProfilePropsType> = (props: RecommendationProfilePropsType) => {
    return (
        <S.RecommendationProfile>
            <S.Avatar src={props.photo} alt="avatar"  />
            <FlexWrapper direction={'column'} justify={'center'} align={"start"}>
                <S.Name>{props.name}</S.Name>
                <S.Profession>{props.profession}</S.Profession>
            </FlexWrapper>
        </S.RecommendationProfile>
    );
};

