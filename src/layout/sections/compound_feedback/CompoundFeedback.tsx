import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";
import {Container} from "../../../components/Container.tsx";
import {LeaveInfo} from "../leave_info/LeaveInfo.tsx";
import {ContactInfo} from "../contact_info/ContactInfo.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const CompoundFeedback = () => {
    return (
        <StyledCompoundFeedback>
            <Container>
                <FlexWrapper gap={"30px"} wrap={"wrap"} justify={"center"}>
                    <LeaveInfo/>
                    <ContactInfo/>
                </FlexWrapper>
            </Container>
        </StyledCompoundFeedback>
    );
};

const StyledCompoundFeedback = styled.section`
    background-color: ${theme.colors.secondaryBg};

    section:nth-child(2) {
        padding: 0;
    }
`;