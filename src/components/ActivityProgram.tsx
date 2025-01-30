import {ActivityCard, ActivityItemPropsType} from "./card/ActivityCard.tsx";
import {FlexWrapper} from "./FlexWrapper.tsx";
import styled from "styled-components";

type ActivityProgramPropsType = {
    items: Array<ActivityItemPropsType>
}

export const ActivityProgram = (props: ActivityProgramPropsType) => {
    return (
        <StyledActivityProgram>
            <FlexWrapper direction={"column"}>
                { props.items.map(item => (
                    <ActivityCard
                        titleLeft={item.titleLeft}
                        duration={item.duration}
                        titleRight={item.titleRight}
                        description={item.description}/>
                ))}
            </FlexWrapper>
        </StyledActivityProgram>
    );
};

const StyledActivityProgram = styled.div`
    
`;