import {ActivityCard, ActivityItemPropsType} from "./card/ActivityCard.tsx";
import styled from "styled-components";
import {theme} from "../slyles/Theme.ts";

type ActivityProgramPropsType = {
    items: Array<ActivityItemPropsType>
}

export const ActivityProgram = (props: ActivityProgramPropsType) => {
    return (
        <StyledActivityProgram>
            { props.items.map(item => (
                <ActivityCard
                    titleLeft={item.titleLeft}
                    duration={item.duration}
                    titleRight={item.titleRight}
                    description={item.description}/>
            ))}
        </StyledActivityProgram>
    );
};

const StyledActivityProgram = styled.ul`
    background-color: ${theme.colors.primaryBg};
    padding: 20px 40px;
    
    display: flex;
    flex-direction: column;
`;