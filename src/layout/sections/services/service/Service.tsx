import {Icon} from "../../../../components/icon/Icon.tsx";
import { S } from "../Services_Styles.ts";
import * as React from "react";

type ServicePropsType = {
    iconId?: string
    title: string
    description: string
    actionText?: string
}

export const Service: React.FC<ServicePropsType> = (props: ServicePropsType) => {
    return (
        <S.Service>
                {props.iconId && (
                    <S.IconWrapper>
                        <Icon iconId={props.iconId} width={"74px"} viewBox={"0 0 74 74"}/>
                    </S.IconWrapper>
                )}
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                {props.actionText && (
                    <S.OrderButton>
                        <S.ActionText href={'#'}>{props.actionText}</S.ActionText>
                        <Icon iconId={"rightAngleBracket"} width={"10px"} viewBox={"0 0 10px 10px"}/>
                    </S.OrderButton>
                )}
        </S.Service>
    );
};