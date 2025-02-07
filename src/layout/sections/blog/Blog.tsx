import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {PhotoAlbum} from "../../../components/PhotoAlbum.tsx";
import portfolio1 from "../../../assets/images/portfolio-1.webp";
import portfolio2 from "../../../assets/images/portfolio-2.webp";
import portfolio3 from "../../../assets/images/portfolio-3.webp";
import {Container} from "../../../components/Container.tsx";

export const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <SectionTitle>Blog</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <PhotoAlbum photos={[
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
                    },
                ]}/>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    background-color: #f0f0f6;
`;