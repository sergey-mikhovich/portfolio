import {Icon} from "../../icon/Icon.tsx";
import * as React from "react";
import {S} from "./NavMenu_Styles.ts";

type NavMenuItemsPropsType = {
    href: string,
    iconId: string,
    title?: string,
    iconWidth?: string,
    iconViewBox?: string
}

type NavMenuPropsType = {
    items: Array<NavMenuItemsPropsType>,
    direction?: "row" | "column",
    gap?: string,
    justify?: string,
    align?: string,
}

export const NavMenu: React.FC<NavMenuPropsType> = (props: NavMenuPropsType) => {
    return (
        <S.NavMenu
            direction={props.direction}
            justify={props.justify}
            align={props.align}
            gap={props.gap} >
            <ul>
                {props.items.map((item, index) => (
                    <S.ListItem key={index}>
                        <S.Link title={item.title} href={`#${item.href}`}>
                            <Icon iconId={item.iconId} width={item.iconWidth} viewBox={item.iconViewBox} />
                        </S.Link>
                    </S.ListItem>
                ))}
            </ul>
        </S.NavMenu>
    );
};