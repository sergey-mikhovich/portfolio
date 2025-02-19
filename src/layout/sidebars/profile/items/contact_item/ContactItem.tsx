import {S} from "../ProfileSidebarItems_Styles.ts";
import * as React from "react";

type ContactItemPropsType = {
    name: string,
    value: string,
    online?: boolean
}

export const ContactItem: React.FC<ContactItemPropsType> = (props: ContactItemPropsType) => {
    return (
        <S.ContactItem>
            <S.ContactName>{props.name}</S.ContactName>
            <S.ContactValue online={props.online || false}>{props.value}</S.ContactValue>
        </S.ContactItem>
    );
};