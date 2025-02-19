import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from "../Services_Styles.ts";
import * as React from "react";

type OrderServicePropsType = {
    title: string
    description: string
    actionText: string
}

export const OrderService: React.FC<OrderServicePropsType> = (props: OrderServicePropsType) => {
    return (
        <StyledOrderService>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <OrderButton>
                <ActionText href={'#'}>{props.actionText}</ActionText>
                <Icon iconId={"rightAngleBracket"} width={"10px"} viewBox={"0 0 10px 10px"}/>
            </OrderButton>
        </StyledOrderService>
    );
};

const StyledOrderService = styled(S.Service)`
    min-width: 310px;
    width: 310px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h3`
    
`;

const Description = styled.p`
    text-align: center;
    padding: 25px 0 10px;
`;

const OrderButton = styled.button`
    display: flex;
    min-height: 20px;
    height: 100%;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

const ActionText = styled.a`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: ${theme.colors.accent};
`;