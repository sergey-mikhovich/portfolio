import {SectionTitle} from "../SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {S} from "./LeaveInfo_Styles.ts";
import * as React from "react";

export const LeaveInfo: React.FC = () => {
    return (
        <S.LeaveInfo>
            <SectionTitle>Leave Us Your Info</SectionTitle>
            <S.Form>
                <FlexWrapper direction={'column'}>
                    <S.Label htmlFor={'full_name'}>Your full name (Required)</S.Label>
                    <S.Field id={'full_name'}/>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <S.Label htmlFor={'email'}>Your email (Required)</S.Label>
                    <S.Field id={'email'}/>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <S.Label htmlFor={'subject'}>Subject</S.Label>
                    <S.Field id={'subject'}/>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <S.Label htmlFor={'message'}>Your message</S.Label>
                    <S.Field id={'message'} as={"textarea"}/>
                </FlexWrapper>
                <S.SendButton type={"submit"}>Send Message</S.SendButton>
            </S.Form>
        </S.LeaveInfo>
    );
};