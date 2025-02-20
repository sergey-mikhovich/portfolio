import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {ProjectsAlbum} from "../../../components/list/ProjectsAlbum.tsx";
import portfolio1 from "../../../assets/images/portfolio-1.webp";
import portfolio2 from "../../../assets/images/portfolio-2.webp";
import portfolio3 from "../../../assets/images/portfolio-3.webp";
import {Container} from "../../../components/Container.ts";
import * as React from "react";

const projects = [
    {
        photo: portfolio1,
        title: "How to make web templates",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
        linkText: "Learn More"
    },
    {
        photo: portfolio2,
        title: "Make business card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
        linkText: "Learn More"

    },
    {
        photo: portfolio3,
        title: "How to make Flyer Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna",
        linkText: "Learn More"
    }
]

export const Blog: React.FC = () => {
    return (
        <StyledBlog id={"blog"}>
            <Container>
                <SectionTitle>Blog</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <ProjectsAlbum projects={projects}/>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
`;