import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../slyles/Theme.ts";

type RecordPropsType = {
    name: string,
    value: string
}

type ContactInfoPropsType = {
    iconId: string,
    records: Array<RecordPropsType>
}

export const ContactCard = (props: ContactInfoPropsType) => {
    return (
        <StyledContactCard>
            <Icon iconId={props.iconId} width={'40px'} viewBox={'0 0 40 40'}/>
            {props.records.map((record: RecordPropsType) => (
                <FlexWrapper justify={'space-between'}>
                    <Name>{record.name}:</Name>
                    <Value>{record.value}</Value>
                </FlexWrapper>
            ))}
        </StyledContactCard>
    );
};

const StyledContactCard = styled.div`
    min-height: 210px;
    max-width: 370px;
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: ${theme.colors.primaryBg};
    padding: 25px;
`;

const Name = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.secondaryFont};
`;

const Value = styled.p`
    
`