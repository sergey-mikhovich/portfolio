import {FlexWrapper} from "../FlexWrapper.tsx";
import styled from "styled-components";

export type ActivityItemPropsType = {
    titleLeft: string
    duration: string
    titleRight: string
    description: string
}

export const ActivityCard = (props: ActivityItemPropsType) => {
    return (
        <StyledActivityCard>
            <FlexWrapper justify="space-evenly">
                <FlexWrapper direction="column">
                    <StyledTitleLeft>{props.titleLeft}</StyledTitleLeft>
                    <span>Student<StyledDuration>{props.duration}</StyledDuration></span>
                </FlexWrapper>
                <FlexWrapper direction="column">
                    <h3>{props.titleRight}</h3>
                    <p>{props.description}</p>
                </FlexWrapper>
            </FlexWrapper>
        </StyledActivityCard>
    );
};

const StyledActivityCard = styled.div`
    border: solid black;
    background-color: antiquewhite;
`;

const StyledTitleLeft = styled.h3`
    
`;

const StyledDuration = styled.span`
    background-color: orange;
`;