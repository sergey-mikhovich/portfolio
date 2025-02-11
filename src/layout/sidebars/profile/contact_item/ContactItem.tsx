import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";

type ContactItemPropsType = {
    name: string,
    value: string,
    online?: boolean
}

export const ContactItem = (props: ContactItemPropsType) => {
    return (
        <StyledContactItem>
            <Name>{props.name}</Name>
            <Value online={props.online || false}>{props.value}</Value>
        </StyledContactItem>
    );
};

const StyledContactItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Name = styled.span`
    padding: 5px;
    background-color: ${theme.colors.accent};
`;

const Value = styled.span<{online: boolean}>`
    color: ${props => props.online ? theme.colors.online : theme.colors.primaryFont};
`;