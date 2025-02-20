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
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 180, 0, 0.95);
`;

const PhotoWrapper = styled.div`
    width: 100%;
    height: 100%;
    
    &:hover {
        position: relative;

        ${IconButton} {
            display: block;
            position: absolute;

            transform: translate(-50%, -50%);

            top: 50%;
            left: 50%;
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