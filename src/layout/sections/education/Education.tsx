import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {ActivityCards} from "../../../components/list/ActivityCards.tsx";
import {Container} from "../../../components/Container.ts";
import * as React from "react";

const educationItems = [
    {
        titleLeft: 'University of Toronto',
        status: 'Student',
        duration: 'Jan 2018 - Dec 2021',
        titleRight: 'Certificate of Web Training',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
    {
        titleLeft: 'Programming Course',
        status: 'Student',
        duration: 'Jan 2018 - Dec 2021',
        titleRight: 'Certificate of Web Training',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    },
    {
        titleLeft: 'Web developer courses',
        status: 'Student',
        duration: 'Jan 2018 - Dec 2021',
        titleRight: 'Certificate of Web Training',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
    }
]

export const Education: React.FC = () => {
    return (
        <StyledEducation id={"education"}>
            <Container>
                <SectionTitle>Education</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <ActivityCards items={educationItems}/>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
`;

