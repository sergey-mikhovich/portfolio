import {ProjectCard, ProjectCardPropsType} from "../card/project_card/ProjectCard.tsx";
import styled from "styled-components";
import * as React from "react";
import {Zoom} from "react-awesome-reveal";

type ProjectsAlbumPropsType = {
    projects: Array<ProjectCardPropsType>
}

export const ProjectsAlbum: React.FC<ProjectsAlbumPropsType> = (props: ProjectsAlbumPropsType) => {
    return (
        <StyledProjectsAlbum>
            <Zoom cascade damping={0.05} triggerOnce>
                {props.projects.map((project) => (
                    <ProjectCard
                        photo={project.photo}
                        title={project.title}
                        description={project.description}
                        linkText={project.linkText} />
                ))}
            </Zoom>
        </StyledProjectsAlbum>
    );
};

const StyledProjectsAlbum = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 20px;
`;