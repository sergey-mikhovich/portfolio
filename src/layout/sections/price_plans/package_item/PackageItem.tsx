import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from "./PackageItem_Styles.ts";
import * as React from "react";

export type PackageItemPropsType = {
    included: boolean
    text: string
}

export const PackageItem: React.FC<PackageItemPropsType> = (props: PackageItemPropsType) => {
    return (
        <S.PackageItem>
            <Icon iconId={props.included ? 'check' : 'close'} width={'24px'} viewBox={'0 0 24 24'}/>
            <S.Description>{props.text}</S.Description>
        </S.PackageItem>
    );
};