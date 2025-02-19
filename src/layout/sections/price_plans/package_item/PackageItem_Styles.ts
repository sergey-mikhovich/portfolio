import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";

const PackageItem = styled.li`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.primaryBg};
`;

const Description = styled.span`
    padding-left: 15px;
    text-align: start;
`;

export const S = {
    PackageItem,
    Description,
}