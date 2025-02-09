import styled from "styled-components";
import {StyledSkill} from "./Service.tsx";
import {theme} from "../../../../slyles/Theme.ts";
import {Icon} from "../../../../components/icon/Icon.tsx";

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
            <LinkWrapper>
                <ActionText href={'#'}>{props.actionText}</ActionText>
                <Icon iconId={"rightAngleBracket"} width={"10px"} viewBox={"0 0 10px 10px"}/>
            </LinkWrapper>
        </StyledOrderService>
    );
};

const StyledOrderService = styled(StyledSkill)`
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

const LinkWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

const ActionText = styled.a`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: ${theme.colors.accent};
`;