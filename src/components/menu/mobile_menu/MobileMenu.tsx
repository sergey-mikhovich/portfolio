import {ProfileSidebar} from "../../../layout/sidebars/profile/ProfileSidebar.tsx";
import * as React from "react";
import {S} from "./MobileMenu_Styles.ts";

export const MobileMenu: React.FC = () => {
    const [isOpen, toggle] = React.useState(false);

    function popUpClick(event) {
        if (event.target === event.currentTarget) {
            toggle(false);
        }
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={() => toggle(true)}>
                <span></span>
            </S.BurgerButton>

            <S.Popup isOpen={isOpen} onClick={popUpClick}>
                <ProfileSidebar isOpen={isOpen} onClose={() => toggle(false)} />
            </S.Popup>
        </S.MobileMenu>
    );
};