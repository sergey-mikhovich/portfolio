import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

export type PackageItemPropsType = {
    included: boolean
    text: string
}

export const PackageItem = (props: PackageItemPropsType) => {
    return (
        <StyledPackageItem>
            <FlexWrapper>
                <Icon iconId={props.included ? 'check' : 'close'} width={'24px'} viewBox={'0 0 24 24'}/>
                <span>{props.text}</span>
            </FlexWrapper>
        </StyledPackageItem>
    );
};

const StyledPackageItem = styled.div`
    background-color: lightgreen;
    border: solid black;
`;