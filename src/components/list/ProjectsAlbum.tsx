import {ProjectCard, ProjectCardPropsType} from "../card/project_card/ProjectCard.tsx";
import styled from "styled-components";
import * as React from "react";

type ProjectsAlbumPropsType = {
    projects: Array<ProjectCardPropsType>
}

export const ProjectsAlbum: React.FC<ProjectsAlbumPropsType> = (props: ProjectsAlbumPropsType) => {
    return (
        <StyledProjectsAlbum>
            {props.projects.map((project) => (
                <ProjectCard
                    photo={project.photo}
                    title={project.title}
                    description={project.description}
                    linkText={project.linkText} />
            ))}
        </StyledProjectsAlbum>
    );
};

const StyledProjectsAlbum = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    
    &::after {
        content: "";
        width: 310px;
        flex-grow: 1;
    }
`;