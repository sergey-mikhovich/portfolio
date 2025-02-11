import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {LeaveInfo} from "../leave_info/LeaveInfo.tsx";
import {ContactInfo} from "../contact_info/ContactInfo.tsx";


export const CompoundFeedback = () => {
    return (
        <StyledCompoundFeedback>
            <Container>
                <CompoundFeedbackWrapper>
                    <LeaveInfo/>
                    <ContactInfo/>
                </CompoundFeedbackWrapper>
            </Container>
        </StyledCompoundFeedback>
    );
};

const StyledCompoundFeedback = styled.section`
`;

const CompoundFeedbackWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    
    padding-bottom: 70px;
`;