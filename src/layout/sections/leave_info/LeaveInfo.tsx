import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";
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
                    <Field id={'message'} as={"textarea"}/>
                </FlexWrapper>
                <SendButton type={"submit"}>Send Message</SendButton>
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
    gap: 25px;
    min-height: 680px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    padding: 25px;
    margin-top: 50px;
    
    textarea {
        min-height: 210px;
        resize: none;
    }
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
`;

const Field = styled.input`
    border: none;
    background-color: ${theme.colors.secondaryBg};
    padding: 15px;
    font-size: 20px;
    color: ${theme.colors.primaryFont};
`;

const SendButton = styled(Button)`
    padding: 10px 24px;
    font-weight: 600;
    max-height: 35px;
    max-width: 170px;
`;