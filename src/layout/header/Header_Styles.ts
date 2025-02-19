import styled from "styled-components";
import {theme} from "../../slyles/Theme.ts";

const Header = styled.header`
    position: absolute;
    width: 100%;
    padding: 30px 30px;
    display: none;

    @media ${theme.media.largeTablet} {
        display: block;
    }
`;

export const S = {
    Header
};