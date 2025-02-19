import {Icon} from "../../icon/Icon.tsx";
import {FlexWrapper} from "../../FlexWrapper.ts";
import {S} from "./ContactCard_Styles.ts";

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
        <S.ContactCard>
            <S.IconWrapper>
                <Icon iconId={props.iconId} width={'17px'} viewBox={'0 0 17 17'}/>
            </S.IconWrapper>
            <S.Contacts>
                {props.records.map((record: RecordPropsType) => (
                    <FlexWrapper justify={'space-between'} gap={"20px"}>
                        <S.Name>{record.name}:</S.Name>
                        <S.Value>{record.value}</S.Value>
                    </FlexWrapper>
                ))}
            </S.Contacts>
        </S.ContactCard>
    );
};