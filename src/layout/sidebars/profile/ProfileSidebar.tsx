import styled from "styled-components";
import photo from "../../../assets/images/photo.webp"
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../slyles/Theme.ts";
import {ContactItem} from "./contact_item/ContactItem.tsx";
import {ProgressItem} from "./progress_item/ProgressItem.tsx";
import {Button} from "../../../components/Button.tsx";

const socialIconWidth = "14px"
const socialIconViewBox = "0 0 14 14"

export const ProfileSidebar = () => {
    return (
        <StyledProfileSidebar>
            <Photo src={photo} alt={'photo'} />
            <Name>Sergey Mikhovich</Name>
            <Occupation>Front-end Developer</Occupation>
            <Icons>
                <Icon iconId={'facebook'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                <Icon iconId={'instagram'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                <Icon iconId={'twitter'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                <Icon iconId={'linkedin'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                <Icon iconId={'youtube'} width={socialIconWidth} viewBox={socialIconViewBox}/>
                <Icon iconId={'dribble'} width={socialIconWidth} viewBox={socialIconViewBox}/>
            </Icons>
            <Contacts>
                <ContactItem name={"Age"} value={"24"}/>
                <ContactItem name={"Residence"} value={"BD"}/>
                <ContactItem name={"Freelance"} value={"Available"}/>
                <ContactItem name={"Address"} value={"Minsk, Belarus"}/>
            </Contacts>
            <Languages>
                <Title>Languages</Title>
                <ProgressItem name={"Bangla"} progress={"100"}/>
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
                <ProgressItem name={"Html"} progress={"90"}/>
                <ProgressItem name={"Css"} progress={"85"}/>
                <ProgressItem name={"Js"} progress={"80"}/>
                <ProgressItem name={"PHP"} progress={"95"}/>
                <ProgressItem name={"WordPress"} progress={"70"}/>
            </ExtraSkills>
            <Button>Download CV</Button>
        </StyledProfileSidebar>
    );
};

const StyledProfileSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 305px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: ${theme.colors.primaryBg};
    padding: 50px 40px;
`;

const Photo = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

const Name = styled.h3`
    padding: 30px 0 15px;
`;

const Occupation = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: ${theme.colors.secondaryFont};
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 15px 0 50px;
`

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 50px;
`;

const Languages = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`;

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`;

const ExtraSkills = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
`;

const Title = styled.h3`
    margin-bottom: 15px;
`;