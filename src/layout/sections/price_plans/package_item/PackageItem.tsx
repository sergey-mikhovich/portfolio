import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../slyles/Theme.ts";

export type PackageItemPropsType = {
    included: boolean
    text: string
}

export const PackageItem = (props: PackageItemPropsType) => {
    return (
        <StyledPackageItem>
            <Icon iconId={props.included ? 'check' : 'close'} width={'24px'} viewBox={'0 0 24 24'}/>
            <ServiceText>{props.text}</ServiceText>
        </StyledPackageItem>
    );
};

const StyledPackageItem = styled.li`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.primaryBg};
`;

const ServiceText = styled.span`
    padding-left: 15px;
`;