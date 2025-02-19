import {NavMenu} from "../../../components/menu/nav_menu/NavMenu.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import * as React from "react";
import {S} from "./NavigationBar_Styles.ts";

const iconWidth = "18px"
const iconViewBox = "0 0 18 18"

const navMenuItems = [
    { iconId: 'home', title: "Home", href: '#', width: iconWidth, viewBox: iconViewBox },
    { iconId: 'file', title: "File", href: '#', width: iconWidth, viewBox: iconViewBox },
    { iconId: 'cv', title: "CV", href: '#', width: iconWidth, viewBox: iconViewBox },
    { iconId: 'portfolio', title: "Portfolio", href: '#', width: iconWidth, viewBox: iconViewBox },
    { iconId: 'blog', title: "Blog", href: '#', width: iconWidth, viewBox: iconViewBox },
    { iconId: 'contact', title: "Contact", href: '#', width: iconWidth, viewBox: iconViewBox },
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
            <S.NavMenuWrapper direction={props.direction}>
                <NavMenu
                    direction={props.direction}
                    gap={props.gap}
                    items={navMenuItems}
                />
            </S.NavMenuWrapper>
        </S.NavigationBar>
    );
};