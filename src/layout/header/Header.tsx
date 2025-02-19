import {MobileMenu} from "./mobile_menu/MobileMenu.tsx";
import * as React from "react";
import {S} from "./Header_Styles.ts";

export const Header: React.FC = () => {
    return (
        <S.Header>
            <MobileMenu/>
        </S.Header>
    );
};