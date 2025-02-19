import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../components/Container.ts";
import {S} from "./Footer_Styles.ts";
import * as React from "react";

const logoWidth= "140px"
const logoViewBox = "0 0 140 140"
const logoIcons = ["footerLogo1", "footerLogo2", "footerLogo3", "footerLogo4"];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.Map>
                    <iframe
                        src="https://yandex.by/map-widget/v1/?ll=27.727503%2C53.882847&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDExNxIc0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiIKDQ5y3EEVZpxXQg%2C%2C&z=11">
                    </iframe>
                </S.Map>
                <S.LogoWrapper>
                    {logoIcons.map((iconId, index) => (
                        <Icon key={index} iconId={iconId} width={logoWidth} viewBox={logoViewBox}/>
                    ))}
                </S.LogoWrapper>
                <S.CopyrightWrapper>
                    <S.Copyright><span>©</span>2025 All Rights Reserved.</S.Copyright>
                </S.CopyrightWrapper>
            </Container>
        </S.Footer>
    );
};