import {ProfileSidebar} from "../../../layout/sidebars/profile/ProfileSidebar.tsx";
import * as React from "react";
import {S} from "./MobileMenu_Styles.ts";

export const MobileMenu: React.FC = () => {
    return (
        <div>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.Popup isOpen={false}>
                <ProfileSidebar poppedUp/>
            </S.Popup>
        </div>
    );
};