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
            <Progress value={props.progress}/>
        </StyledProgressItem>
    );
};

const StyledProgressItem = styled.div`
    
`;

const Name = styled.span`
    
`;

const Value = styled.span`
    
`;

const Progress = styled.progress.attrs(props => ({
    max: 100,
    value: props.value,
}))`
    width: 100%;
    accent-color: ${theme.colors.accent};
`;