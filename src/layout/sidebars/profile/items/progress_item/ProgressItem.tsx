import {FlexWrapper} from "../../../../../components/FlexWrapper.ts";
import {S} from "../ProfileSidebarItems_Styles.ts";
import * as React from "react";

type ProgressItemPropsType = {
    name: string;
    progress: string;
}

export const ProgressItem: React.FC<ProgressItemPropsType> = (props: ProgressItemPropsType) => {
    return (
        <S.ProgressItem>
            <FlexWrapper justify="space-between">
                <S.ProgressName>{props.name}</S.ProgressName>
                <S.ProgressValue>{props.progress}</S.ProgressValue>
            </FlexWrapper>
            <S.Progress value={props.progress} />
        </S.ProgressItem>
    );
};