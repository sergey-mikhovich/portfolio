import styled from "styled-components";
import {StyledSkill} from "./Service.tsx";

type OrderServicePropsType = {
    title: string
    description: string
    actionText: string
}

export const OrderService = (props: OrderServicePropsType) => {
    return (
        <StyledOrderService>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <ActionText href={'#'}>{props.actionText}</ActionText>
        </StyledOrderService>
    );
};

const StyledOrderService = styled(StyledSkill)`
   
`;

const Title = styled.h3`
    
`;

const Description = styled.p`
    
`;

const ActionText = styled.a`
    
`;