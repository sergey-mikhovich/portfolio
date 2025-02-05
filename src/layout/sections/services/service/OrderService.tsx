import styled from "styled-components";
import {StyledSkill} from "./Service.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
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
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <FlexWrapper justify={"center"} align={"center"}>
                    <ActionText href={'#'}>{props.actionText}</ActionText>
                    <Icon iconId={"rightAngleBracket"} width={"20px"} viewBox={"0 0 20px 20px"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledOrderService>
    );
};

const StyledOrderService = styled(StyledSkill)`

`;

const Title = styled.h3`
    
`;

const Description = styled.p`
    font-size: 15px;
    line-height: 24px;
    color: ${theme.colors.secondaryFont};
    padding: 25px 0 10px;
`;

const ActionText = styled.a`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: ${theme.colors.accent};
`;