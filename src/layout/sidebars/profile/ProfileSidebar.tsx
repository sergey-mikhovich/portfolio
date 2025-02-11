import styled from "styled-components";
import photo from "../../../assets/images/photo.webp"
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../slyles/Theme.ts";
import {ContactItem} from "./contact_item/ContactItem.tsx";
import {ProgressItem} from "./progress_item/ProgressItem.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {ExtraSkill} from "./extra_skill/ExtraSkill.tsx";

const socialIconWidth = "14px"
const socialIconViewBox = "0 0 14 14"

export const ProfileSidebar = () => {
    return (
        <StyledProfileSidebar>
            <PhotoWrapper>
                <Photo src={photo} alt={'photo'} />
            </PhotoWrapper>
            <Name>Sergey Mikhovich</Name>
            <Occupation>Front-end Developer</Occupation>
            <Links>
                <Link>
                    <Icon iconId={'facebook'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                </Link>
                <Link>
                    <Icon iconId={'instagram'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                </Link>
                <Link>
                    <Icon iconId={'twitter'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                </Link>
                <Link>
                    <Icon iconId={'linkedin'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                </Link>
                <Link>
                    <Icon iconId={'youtube'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                </Link>
                <Link>
                    <Icon iconId={'dribble'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                </Link>
            </Links>
            <Contacts>
                <ContactItem name={"Age"} value={"24"}/>
                <ContactItem name={"Residence"} value={"BD"}/>
                <ContactItem name={"Freelance"} value={"Available"} online/>
                <ContactItem name={"Address"} value={"Minsk, Belarus"}/>
            </Contacts>
            <Languages>
                <Title>Languages</Title>
                <ProgressItem name={"Bangla"} progress={"100"} />
                <ProgressItem name={"English"} progress={"90"}/>
                <ProgressItem name={"Spain"} progress={"80"}/>
            </Languages>
            <Skills>
                <Title>Skills</Title>
                <ProgressItem name={"Html"} progress={"90"}/>
                <ProgressItem name={"Css"} progress={"85"}/>
                <ProgressItem name={"Js"} progress={"80"}/>
                <ProgressItem name={"PHP"} progress={"95"}/>
                <ProgressItem name={"WordPress"} progress={"70"}/>
            </Skills>
            <ExtraSkills>
                <Title>Extra Skills</Title>
                <ExtraSkill description={"Bootstrap, Materialize"}/>
                <ExtraSkill description={"Stylus, Sass, Less"}/>
                <ExtraSkill description={"Gulp, Webpack, Grunt"}/>
                <ExtraSkill description={"GIT Knowledge"}/>
            </ExtraSkills>
            <DownloadButton>
                <span>Download CV</span>
                <Icon iconId={"download"} width={"16px"} viewBox={"0 0 16 16"}/>
            </DownloadButton>
        </StyledProfileSidebar>
    );
};

const StyledProfileSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 305px;
    height: 100%;
    background-color: ${theme.colors.primaryBg};
    padding: 50px 40px;
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