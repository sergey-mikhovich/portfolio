import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";

type ServicePropsType = {
    iconId: string
    title: string
    description: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </StyledSkill>
    );
};


export const StyledSkill = styled.div`
    max-width: 310px;
    width: 100%;
    background-color: lightgreen;
    border: solid black;
`;

const Title = styled.h3`
    
`;

const Description = styled.p`
    
`;