import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";

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
                    <span>{record.name}:</span>
                    <span>{record.value}</span>
                </FlexWrapper>
            ))}
        </StyledContactCard>
    );
};

const StyledContactCard = styled.div`
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;