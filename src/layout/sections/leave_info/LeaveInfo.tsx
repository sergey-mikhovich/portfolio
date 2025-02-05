import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/Button.tsx";

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
                    <Field as={"textarea"} id={'message'}/>
                </FlexWrapper>
                <Button type={"submit"}>Send Message</Button>
            </StyledForm>
        </StyledLeaveInfo>
    );
};

const StyledLeaveInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
    background-color: aliceblue;
    max-width: 570px;
    width: 100%;
`;

const StyledForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
`;

const Label = styled.label`
    display: block;
`;

const Field = styled.input`
`;