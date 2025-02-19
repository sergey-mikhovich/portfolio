import photo from '../../../assets/images/photo.webp'
import {Container} from "../../../components/Container.ts";
import {S} from "./Main_Styles.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import * as React from "react";
import {MobileMenu} from "../../../components/menu/mobile_menu/MobileMenu.tsx";

export const Main : React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.Foreground>
                    <S.MenuWrapper>
                        <MobileMenu/>
                    </S.MenuWrapper>
                    <S.ContentWrapper>
                        <S.Name>I am Sergey Mikhovich</S.Name>
                        <S.MainTitle><S.AccentTitle>Front-end </S.AccentTitle>Developer</S.MainTitle>
                        <S.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</S.Description>
                        <S.MainButton>
                            Hire Me
                            <Icon iconId={"rightArrow"} width={"16px"} viewBox={"0 0 16 16"}/>
                        </S.MainButton>
                    </S.ContentWrapper>
                    <S.Photo src={photo} alt="photo" />
                </S.Foreground>
            </Container>
        </S.Main>
    );
};



