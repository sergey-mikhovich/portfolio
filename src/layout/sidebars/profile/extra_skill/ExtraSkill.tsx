import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../slyles/Theme.ts";

type ExtraSkillPropsType = {
    description: string;
}

export const ExtraSkill = (props: ExtraSkillPropsType) => {
    return (
        <StyledExtraSkill>
            <Icon iconId={"rectangleOverlap"} width={"15px"} viewBox={"0 0 15 15"}/>
            <Description>{props.description}</Description>
        </StyledExtraSkill>
    );
};

const StyledExtraSkill = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Description = styled.span`
    color: ${theme.colors.secondaryFont};
`;