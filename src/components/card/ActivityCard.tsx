import {FlexWrapper} from "../FlexWrapper.tsx";
import styled from "styled-components";
import {theme} from "../../slyles/Theme.ts";

export type ActivityItemPropsType = {
    titleLeft: string
    status: string
    duration: string
    titleRight: string
    description: string
}

export const ActivityCard = (props: ActivityItemPropsType) => {
    return (
        <StyledActivityCard>
            <LeftPart>
                <Title>{props.titleLeft}</Title>
                <FlexWrapper align={'center'}>
                    <Status>{props.status}</Status>
                    <Duration>{props.duration}</Duration>
                </FlexWrapper>
            </LeftPart>
            <RightPart>
                <Title>{props.titleRight}</Title>
                <Description>{props.description}</Description>
            </RightPart>
        </StyledActivityCard>
    );
};

const StyledActivityCard = styled.li`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    
    background-color: ${theme.colors.primaryBg};
    min-height: 160px;
    height: 100%;
    
    position: relative;
    
    & + & {
        &::before {
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            
            top: 0;
            bottom: 0;
            
            transform: translateY(-50%);

            position: absolute;
        }
    }

    & {
        padding: 30px 0;
    }

    &:first-child {
        padding: 0 0 30px;
    }

    &:last-child {
        padding: 30px 0 0;
    }
`;

const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-width: 355px;
    width: 100%;
    height: 100%;
`;


const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    
    max-width: 505px;
    width: 100%;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const Status = styled.span`
    padding-right: 20px;
`;

const Duration = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 7px;
    
    height: 18px;
    font-size: 10px;
    border-radius: 1px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryBg};
`;

const Description = styled.p`
    
`;