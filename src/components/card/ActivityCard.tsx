import {FlexWrapper} from "../FlexWrapper.tsx";
import styled from "styled-components";
import {theme} from "../../slyles/Theme.ts";

export type ActivityItemPropsType = {
    titleLeft: string
    duration: string
    titleRight: string
    description: string
}

export const ActivityCard = (props: ActivityItemPropsType) => {
    return (
        <StyledActivityCard>
            <FlexWrapper justify={"space-between"} wrap={"wrap"} gap={"30px"}>
                <LeftPart>
                    <Title>{props.titleLeft}</Title>
                    <FlexWrapper>
                        <Status>Student</Status>
                        <Duration>{props.duration}</Duration>
                    </FlexWrapper>
                </LeftPart>
                <RightPart>
                    <Title>{props.titleRight}</Title>
                    <Description>{props.description}</Description>
                </RightPart>
            </FlexWrapper>
        </StyledActivityCard>
    );
};

const StyledActivityCard = styled.li`
    background-color: ${theme.colors.primaryBg};
    min-height: 150px;
    padding: 30px 0;
`;

const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 360px;
`;


const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 530px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const Status = styled.span`
    padding-right: 20px;
`;

const Duration = styled.span`
    background-color: ${theme.colors.accent};
    height: 18px;
    font-size: 10px;
    vertical-align: middle;
    color: ${theme.colors.primaryBg};
`;

const Description = styled.p`
    
`;