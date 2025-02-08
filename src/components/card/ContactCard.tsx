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
            <IconWrapper>
                <Icon iconId={props.iconId} width={'17px'} viewBox={'0 0 17 17'}/>
            </IconWrapper>
            <Contacts>
                {props.records.map((record: RecordPropsType) => (
                    <FlexWrapper justify={'space-between'}>
                        <Name>{record.name}:</Name>
                        <Value>{record.value}</Value>
                    </FlexWrapper>
                ))}
            </Contacts>
        </StyledContactCard>
    );
};

const StyledContactCard = styled.div`
    min-height: 210px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: ${theme.colors.primaryBg};
    padding: 25px;
`;

const IconWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: ${theme.colors.accent};
        z-index: -1;
        
        transform: translate(-50%, -50%);
        
        left: 50%;
        top: 50%;
        position: absolute;
    }
`;

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
`;

const Name = styled.span`
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.secondaryFont};
`;

const Value = styled.p`
    
`