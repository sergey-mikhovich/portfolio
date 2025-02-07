import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../slyles/Theme.ts";

type ContactItemPropsType = {
    name: string,
    value: string
}

export const ContactItem = (props: ContactItemPropsType) => {
    return (
        <StyledContactItem>
            <FlexWrapper justify={"space-between"}>
                <Name>{props.name}</Name>
                <Value>{props.value}</Value>
            </FlexWrapper>
        </StyledContactItem>
    );
};

const StyledContactItem = styled.div`
    
`;

const Name = styled.span`
    background-color: ${theme.colors.accent};
`;

const Value = styled.span`
    
`;