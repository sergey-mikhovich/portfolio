import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
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
    flex-wrap: wrap;
    gap: 30px;
    
    padding-bottom: 70px;
    
    & > section:first-of-type {
        flex-grow: 1;
        width: 570px;
    }
    
    & > section:last-of-type {
        flex-grow: 1;
        width: 370px;
        
        padding: 0;
    }
`;