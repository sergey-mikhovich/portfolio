import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.ts";
import { S } from "../Services_Styles.ts";
import * as React from "react";

type ServicePropsType = {
    iconId: string
    title: string
    description: string
}

export const Service: React.FC<ServicePropsType> = (props: ServicePropsType) => {
    return (
        <S.Service>
            <FlexWrapper direction={"column"} align={"center"} wrap={"wrap"}>
                <Icon iconId={props.iconId} width={"74px"} viewBox={"0 0 74 74"}/>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
            </FlexWrapper>
        </S.Service>
    );
};