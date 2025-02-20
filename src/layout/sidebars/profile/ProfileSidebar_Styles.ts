import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";
import {Button} from "../../../components/button/Button.tsx";

const ProfileSidebar = styled.aside`
    width: 305px;
    background-color: ${theme.colors.primaryBg};
    padding: 50px 40px;
    
    position: relative;
`;

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 220px;
    
    margin: 0 auto;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    
    span {
        display: block;
        width: 30px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        top: 50%;
        
        transform: translate(-50%, -50%) rotate(45deg);
        
        &::before {
            content: "";
            display: block;
            width: 30px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            
            transform: rotate(-90deg);
        }
    }
`;

const Photo = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top 10px left 0;
    background-color: ${theme.colors.secondaryBg};
`;

const PhotoWrapper = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    
    position: relative;
    
    &::before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${theme.colors.online};
        
        transform: translate(50%, 50%);
        
        left: calc(50% + (50% / 2));
        top: calc(50% + (50% / 2));
    }
`;

const Name = styled.h3`
    padding: 30px 0 15px;
`;

const Occupation = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: ${theme.colors.secondaryFont};
`;

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: ${theme.colors.accent};
    border-radius: 50%;

    transition: ${theme.animation.transition_0_4_easy_in_out};

    &:hover {
        transform: translateY(-4px);
    }
`;

const Links = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 15px 0 50px;
`

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
    margin-bottom: 50px;
`;

const Languages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
`;

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
    margin-bottom: 50px;
`;

const ExtraSkills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    margin-bottom: 50px;
`;

const Title = styled.h3`
    margin-bottom: 15px;
`;

const DownloadButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;

    padding: 16px 32px;
    font-weight: 600;
    font-size: 16px;
`;

export const S = {
    ProfileSidebar,
    SidebarWrapper,
    CloseButton,
    Photo,
    PhotoWrapper,
    Name,
    Occupation,
    Link,
    Links,
    Contacts,
    Languages,
    Skills,
    ExtraSkills,
    Title,
    DownloadButton,
}