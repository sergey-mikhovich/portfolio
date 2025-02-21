import {ActivityCard, ActivityCardPropsType} from "../card/activity_card/ActivityCard.tsx";
import styled from "styled-components";
import {theme} from "../../slyles/Theme.ts";
import * as React from "react";
import {Fade} from "react-awesome-reveal";

type ActivityCardsPropsType = {
    items: Array<ActivityCardPropsType>
}

export const ActivityCards: React.FC<ActivityCardsPropsType> = (props: ActivityCardsPropsType) => {
    return (
        <StyledActivityCards>
            <Fade direction={"down"} cascade damping={0.05} triggerOnce>
                { props.items.map(item => (
                    <ActivityCard
                        titleLeft={item.titleLeft}
                        status={item.status}
                        duration={item.duration}
                        titleRight={item.titleRight}
                        description={item.description}/>
                ))}
            </Fade>
        </StyledActivityCards>
    );
};

const StyledActivityCards = styled.ul`
    background-color: ${theme.colors.primaryBg};
    padding: 40px;
    
    display: flex;
    flex-direction: column;
`;