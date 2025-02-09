import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../slyles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type ServicePropsType = {
    iconId: string
    title: string
    description: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"} wrap={"wrap"}>
                <Icon iconId={props.iconId} width={"74px"} viewBox={"0 0 74 74"}/>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
            </FlexWrapper>
        </StyledSkill>
    );
};


export const StyledSkill = styled.div`
    max-width: 310px;
    width: 100%;
    min-height: 230px;
    background-color: ${theme.colors.primaryBg};
    padding: 30px 25px 40px;
`;

const Title = styled.h3`
    padding: 25px 0 15px;
`;

const Description = styled.p`
    
`;