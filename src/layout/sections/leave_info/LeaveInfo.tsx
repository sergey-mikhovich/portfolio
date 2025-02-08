import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";
import {theme} from "../../../slyles/Theme.ts";

export const LeaveInfo = () => {
    return (
        <StyledLeaveInfo>
            <SectionTitle>Leave Us Your Info</SectionTitle>
            <StyledForm>
                <FlexWrapper direction={'column'}>
                    <Label htmlFor={'full_name'}>Your full name (Required)</Label>
                    <Field id={'full_name'}/>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <Label htmlFor={'email'}>Your email (Required)</Label>
                    <Field id={'email'}/>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <Label htmlFor={'subject'}>Subject</Label>
                    <Field id={'subject'}/>
                </FlexWrapper>
                <FlexWrapper direction={'column'}>
                    <Label htmlFor={'message'}>Your message</Label>
                    <TextArea id={'message'}/>
                </FlexWrapper>
                <Button type={"submit"}>Send Message</Button>
            </StyledForm>
        </StyledLeaveInfo>
    );
};

const StyledLeaveInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: ${theme.colors.secondaryBg};
    max-width: 570px;
    width: 100%;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    min-height: 670px;
    width: 100%;
    height: 100%;
    gap: 25px;
    background-color: ${theme.colors.primaryBg};
    padding: 25px;
    margin-top: 50px;
`;

const Label = styled.label`
    display: block;
    font-weight: 500;
    font-size: 18px;
    color: ${theme.colors.secondaryFont};
    margin-bottom: 8px;
`;

const Field = styled.input`
    min-height: 50px;
`;

const TextArea = styled.textarea`
    min-height: 210px;
`;