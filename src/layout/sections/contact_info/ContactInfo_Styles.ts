import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const ContactInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    padding: 0;
`;

const Contacts = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    &::after {
        content: "";
        width: 340px;
        flex-grow: 1;
    }
    //width: 100%;
    //min-height: 680px;
    //height: 100%;
`;

export const S = {
    ContactInfo,
    Contacts,
}