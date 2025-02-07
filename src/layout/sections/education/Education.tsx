import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {ActivityProgram} from "../../../components/ActivityProgram.tsx";
import {theme} from "../../../slyles/Theme.ts";
import {Container} from "../../../components/Container.tsx";

export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <SectionTitle>Education</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <ActivityProgram items={[
                    {
                        titleLeft: 'University of Toronto',
                        duration: 'Jan 2018 - Dec 2021',
                        titleRight: 'Certificate of Web Training',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
                    },
                    {
                        titleLeft: 'Programming Course',
                        duration: 'Jan 2018 - Dec 2021',
                        titleRight: 'Certificate of Web Training',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
                    },
                    {
                        titleLeft: 'Web developer courses',
                        duration: 'Jan 2018 - Dec 2021',
                        titleRight: 'Certificate of Web Training',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
                    }
                ]}/>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
    background-color: ${theme.colors.secondaryBg};
`;

