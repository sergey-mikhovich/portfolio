import * as React from "react";
import {S} from "./TabMenu_Styles.ts";

type TabMenuPropsType = {
    items: Array<string>
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.items.map((item, index) => (
                    <S.ListItem key={index}>
                        <S.Link href="#">{item}</S.Link>
                    </S.ListItem>
                ))}
            </ul>
        </S.TabMenu>
    );
};