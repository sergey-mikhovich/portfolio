import {NavMenu} from "../../../components/menu/nav_menu/NavMenu.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import * as React from "react";
import {S} from "./NavigationBar_Styles.ts";

const iconWidth = "18px"
const iconViewBox = "0 0 18 18"

const navMenuItems = [
    { iconId: 'home', title: "Home", href: 'home', iconWidth: iconWidth, iconViewBox: iconViewBox },
    { iconId: 'file', title: "Services", href: 'services', iconWidth: iconWidth, iconViewBox: iconViewBox },
    { iconId: 'cv', title: "Education", href: 'education', iconWidth: iconWidth, iconViewBox: iconViewBox },
    { iconId: 'portfolio', title: "Portfolio", href: 'portfolio', iconWidth: iconWidth, iconViewBox: iconViewBox },
    { iconId: 'blog', title: "Blog", href: "blog", iconWidth: iconWidth, iconViewBox: iconViewBox },
    { iconId: 'contact', title: "Contacts", href: "contacts", iconWidth: iconWidth, iconViewBox: iconViewBox },
]

type NavigationBarPropsType = {
    direction: "row" | "column",
    padding?: string,
    gap?: string,
}

export const NavigationBar: React.FC<NavigationBarPropsType> = (props: NavigationBarPropsType) => {
    return (
        <S.NavigationBar direction={props.direction} padding={props.padding || "0"}>
            <S.ContrastButton title={"Contrast"}>
                <Icon iconId={"contrast"} width={"30px"} viewBox={"0 0 30 30"}/>
            </S.ContrastButton>
            <NavMenu direction={props.direction} gap={props.gap} items={navMenuItems}/>
        </S.NavigationBar>
    );
};