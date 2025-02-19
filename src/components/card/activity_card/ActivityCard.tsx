import {FlexWrapper} from "../../FlexWrapper.ts";
import {S} from "./ActivityCard_Styles.ts";
import * as React from "react";

export type ActivityCardPropsType = {
    titleLeft: string
    status: string
    duration: string
    titleRight: string
    description: string
}

export const ActivityCard: React.FC<ActivityCardPropsType> = (props: ActivityCardPropsType) => {
    return (
        <S.ActivityCard>
            <S.LeftPart>
                <S.Title>{props.titleLeft}</S.Title>
                <FlexWrapper align={'start'}>
                    <S.Status>{props.status}</S.Status>
                    <S.Duration>{props.duration}</S.Duration>
                </FlexWrapper>
            </S.LeftPart>
            <S.RightPart>
                <S.Title>{props.titleRight}</S.Title>
                <S.Description>{props.description}</S.Description>
            </S.RightPart>
        </S.ActivityCard>
    );
};