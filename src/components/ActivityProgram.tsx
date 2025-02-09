import {ActivityCard, ActivityItemPropsType} from "./card/ActivityCard.tsx";
import styled from "styled-components";
import {theme} from "../slyles/Theme.ts";
import {Line} from "./Line.tsx";

type ActivityProgramPropsType = {
    showDelimiters?: boolean
    items: Array<ActivityItemPropsType>
}

export const ActivityProgram = (props: ActivityProgramPropsType) => {
    return (
        <StyledActivityProgram>
            { props.items.map((item, index) => (
                <>
                    <ActivityCard
                        titleLeft={item.titleLeft}
                        status={item.status}
                        duration={item.duration}
                        titleRight={item.titleRight}
                        description={item.description}/>
                    <Line hidden={!props.showDelimiters || index == props.items.length - 1}/>
                </>
            ))}
        </StyledActivityProgram>
    );
};

const StyledActivityProgram = styled.ul`
    background-color: ${theme.colors.primaryBg};
    padding: 40px;
    
    display: flex;
    flex-direction: column;
    
    li {
        padding: 30px 0;
    }
    
    li:first-of-type {
        padding: 0 0 30px;
    }

    li:last-of-type {
        padding: 30px 0 0;
    }
`;