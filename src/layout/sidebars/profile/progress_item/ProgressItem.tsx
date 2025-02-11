import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../slyles/Theme.ts";

type ProgressItemPropsType = {
    name: string;
    progress: string;
}

export const ProgressItem = (props: ProgressItemPropsType) => {
    return (
        <StyledProgressItem>
            <FlexWrapper justify="space-between">
                <Name>{props.name}</Name>
                <Value>{props.progress}</Value>
            </FlexWrapper>
            <Progress value={props.progress} />
        </StyledProgressItem>
    );
};

const StyledProgressItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Name = styled.span`
    
`;

const Value = styled.span`
    
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