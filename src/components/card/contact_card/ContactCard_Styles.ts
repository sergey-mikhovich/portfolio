import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    
    min-height: 215px;
    width: 340px;

    background-color: ${theme.colors.primaryBg};
    padding: 25px;
`;

const IconWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${theme.colors.accent};
        z-index: -1;
        
        transform: translate(-50%, -50%);
        
        left: 50%;
        top: 50%;
        position: absolute;
    }
`;

const Contacts = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
`;

const Name = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.secondaryFont};
`;

const Value = styled.span`
    color: ${theme.colors.secondaryFont};
`

export const S = {
    ContactCard,
    IconWrapper,
    Contacts,
    Name,
    Value,
}