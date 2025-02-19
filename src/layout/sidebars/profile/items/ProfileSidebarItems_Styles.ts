import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";

//ContactItem

const ContactItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContactName = styled.span`
    padding: 5px;
    background-color: ${theme.colors.accent};
`;

const ContactValue = styled.span<{online: boolean}>`
    color: ${props => props.online ? theme.colors.online : theme.colors.primaryFont};
`;


//ExtraSkill

const ExtraSkill = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Description = styled.span`
    color: ${theme.colors.secondaryFont};
`;


//ProgressItem

const ProgressItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ProgressName = styled.span`
    
`;

const ProgressValue = styled.span`
    
`;

const Progress = styled.div<{value: string}>`
    width: 100%;
    height: 6px;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.accent};
    border-radius: 30px;
    position: relative;
    
    &::before {
        content: "";
        width: ${props => props.value}%;
        height: 100%;
        background-color: ${theme.colors.accent};
        border-radius: 30px;
        
        top: 0;
        left: 0;
        
        position: absolute;
    }
`;

export const S = {
    //ContactItem
    ContactItem,
    ContactName,
    ContactValue,

    //ExtraSkill
    ExtraSkill,
    Description,

    //ProgressItem
    ProgressItem,
    ProgressName,
    ProgressValue,
    Progress,

}