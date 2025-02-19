import {Icon} from "../../../../../components/icon/Icon.tsx";
import {S} from "../ProfileSidebarItems_Styles.ts";
import * as React from "react";

type ExtraSkillPropsType = {
    description: string;
}

export const ExtraSkill: React.FC<ExtraSkillPropsType> = (props: ExtraSkillPropsType) => {
    return (
        <S.ExtraSkill>
            <Icon iconId={"rectangleOverlap"} width={"15px"} viewBox={"0 0 15 15"}/>
            <S.Description>{props.description}</S.Description>
        </S.ExtraSkill>
    );
};