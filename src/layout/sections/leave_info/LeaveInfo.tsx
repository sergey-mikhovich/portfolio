import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const LeaveInfo = () => {
    return (
        <StyledLeaveInfo>
            <SectionTitle>Leave Us Your Info</SectionTitle>
            <StyledForm>
                <FlexWrapper direction={'column'} justify={'space-between'}>
                    <div>Your full name (Required)</div>
                    <input type={'text'}/>
                    <div>Your email (Required)</div>
                    <input type={'text'}/>
                    <div>Subject</div>
                    <input type={'text'}/>
                    <div>Your message</div>
                    <textarea/>
                    <input type={'button'} value={'Send Message'}></input>
                </FlexWrapper>
            </StyledForm>
        </StyledLeaveInfo>
    );
};

const StyledLeaveInfo = styled.section`
    width: 40%;
`;

const StyledForm = styled.form`
    
`;