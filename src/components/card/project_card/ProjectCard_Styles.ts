import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primaryBg};
`;

const IconButton = styled.button`
    background-color: transparent;
`;

const PhotoWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    
    ${IconButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        transition: ${theme.animation.transition_0_4_easy_in_out};
    }
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(255, 180, 0, 0.95);
        opacity: 0;
        transition: ${theme.animation.transition_0_4_easy_in_out};
    }
    
    &:hover {
        &::before {
            opacity: 1;
            cursor: pointer;
        }
        
        ${IconButton} {
            opacity: 1;
            top: 50%;
        }
    }
`;

const Photo = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

const ContentWrapper = styled.div`
    padding: 25px;
`;

const Title = styled.h3`
    
`;

const Description = styled.p`
    margin: 8px 0;
`;

const ActionButton = styled.button`
    display: flex;
    gap: 10px;
    min-height: 24px;
    
    align-items: center;
    background-color: transparent;
`;

const Link = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.accent}
`;

export const S = {
    ProjectCard,
    IconButton,
    PhotoWrapper,
    Photo,
    ContentWrapper,
    Title,
    Description,
    ActionButton,
    Link,
}