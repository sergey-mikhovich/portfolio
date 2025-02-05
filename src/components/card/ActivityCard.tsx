import {FlexWrapper} from "../FlexWrapper.tsx";
import styled from "styled-components";

export type ActivityItemPropsType = {
    titleLeft: string
    duration: string
    titleRight: string
    description: string
}

type LeftPartPropsType = {
    title: string,
    duration: string
}

type RightPartPropsType = {
    title: string,
    description: string,
}

export const ActivityCard = (props: ActivityItemPropsType) => {
    return (
        <StyledActivityCard>
            <FlexWrapper justify="space-evenly" gap={'40px'}>
                <LeftPart title={props.titleLeft} duration={props.duration} />
                <RightPart title={props.titleRight} description={props.description} />
            </FlexWrapper>
        </StyledActivityCard>
    );
};

const StyledActivityCard = styled.div`
    border: solid black;
    background-color: antiquewhite;
    min-height: 200px;
`;

const LeftPart = (props: LeftPartPropsType) => {
    return (
        <FlexWrapper direction="column">
            <StyledTitleLeft>{props.title}</StyledTitleLeft>
            <span>Student<StyledDuration>{props.duration}</StyledDuration></span>
        </FlexWrapper>)
}

const RightPart = (props: RightPartPropsType) => {
    return (
        <FlexWrapper direction="column">
            <h3>${props.title}</h3>
            <p>${props.description}</p>
        </FlexWrapper>
    )
}

const StyledTitleLeft = styled.h3`
    
`;

const StyledDuration = styled.span`
    background-color: orange;
`;