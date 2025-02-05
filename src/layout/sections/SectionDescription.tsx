import styled from "styled-components";
import {theme} from "../../slyles/Theme.ts";

export const SectionDescription = styled.p`
    text-align: center;
    margin: 25px auto 50px;
    font-size: 15px;
    line-height: 24px;
    max-width: 430px;
    color: ${theme.colors.secondaryFont};
`;