import styled from "styled-components";

const Header = styled.header`
    position: absolute;
    width: 100%;
    padding: 30px 30px;
    display: none;

    @media screen and (max-width: 1130px) {
        display: block;
    }
`;

export const S = {
    Header
};