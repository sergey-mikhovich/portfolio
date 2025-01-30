import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {ActivityProgram} from "../../../components/ActivityProgram.tsx";
import styled from "styled-components";

export const WorkHistory = () => {
    return (
        <StyledWorkHistory>
            <SectionTitle>Work History</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <ActivityProgram items={[
                {
                    titleLeft: 'Lead Web Designer',
                    duration: 'Jan 2018 - Dec 2021',
                    titleRight: 'Certificate of Web Training',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
                },
                {
                    titleLeft: 'Junior Web Designer',
                    duration: 'Jan 2018 - Dec 2021',
                    titleRight: 'Certificate of Web Training',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
                },
                {
                    titleLeft: 'Senior Web Designer',
                    duration: 'Jan 2018 - Dec 2021',
                    titleRight: 'Certificate of Web Training',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
                }
            ]}/>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section`
    min-height: 100vh;
    background-color: #f0f0f6;
`;