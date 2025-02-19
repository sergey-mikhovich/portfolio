import {Icon} from "../../icon/Icon.tsx";
import * as React from "react";
import {S} from "./NavMenu_Styles.ts";

type NavMenuItemsPropsType = {
    href: string,
    iconId: string,
    title: string,
    width?: string,
    viewBox?: string
}

type NavMenuPropsType = {
    items: Array<NavMenuItemsPropsType>,
    direction?: "row" | "column",
    gap?: string,
}

export const NavMenu: React.FC<NavMenuPropsType> = (props: NavMenuPropsType) => {
    return (
        <S.NavMenu gap={props.gap || "0px"} direction={props.direction || "column"}>
            <ul>
                {props.items.map((item, index) => (
                    <S.ListItem key={index}>
                        <S.Link title={item.title} href={item.href}>
                            <Icon iconId={item.iconId} width={item.width} viewBox={item.viewBox} />
                        </S.Link>
                    </S.ListItem>
                ))}
            </ul>
        </S.NavMenu>
    );
};