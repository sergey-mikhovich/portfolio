import * as React from "react";
import {S} from "./TabMenu_Styles.ts";

export type TabStatusType = "all" | "design" | "web" | "logo" | "branding"

export type TabItemPropsType = {
    title: string,
    status: TabStatusType
}

type TabMenuPropsType = {
    tabs: Array<TabItemPropsType>,
    changeFilterStatus: (value: TabStatusType) => void,
    currentFilterStatus: TabStatusType
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabs.map((tab, index) => (
                    <S.ListItem key={index}>
                        <S.Link
                            active={props.currentFilterStatus === tab.status}
                            as={"Button"}
                            onClick={() => props.changeFilterStatus(tab.status)}
                        >{tab.title}</S.Link>
                    </S.ListItem>
                ))}
            </ul>
        </S.TabMenu>
    );
};