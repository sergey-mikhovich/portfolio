import photo from "../../../assets/images/photo.webp"
import {Icon} from "../../../components/icon/Icon.tsx";
import {ContactItem} from "./items/contact_item/ContactItem.tsx";
import {ProgressItem} from "./items/progress_item/ProgressItem.tsx";
import {ExtraSkill} from "./items/extra_skill/ExtraSkill.tsx";
import * as React from "react";
import {S} from "./ProfileSidebar_Styles.ts";
import {IconMenu} from "../../../components/menu/icon_menu/IconMenu.tsx";

const socialIconWidth = "14px"
const socialIconViewBox = "0 0 14 14"

const iconMenuItems = [
    { iconId: 'facebook', title: "Facebook", href: '#', iconWidth: socialIconWidth, iconViewBox: socialIconViewBox },
    { iconId: 'instagram', title: "Instagram", href: '#', iconWidth: socialIconWidth, iconViewBox: socialIconViewBox },
    { iconId: 'twitter', title: "Twitter", href: '#', iconWidth: socialIconWidth, iconViewBox: socialIconViewBox },
    { iconId: 'linkedin', title: "Linkedin", href: '#', iconWidth: socialIconWidth, iconViewBox: socialIconViewBox },
    { iconId: 'youtube', title: "Youtube", href: '#', iconWidth: socialIconWidth, iconViewBox: socialIconViewBox },
    { iconId: 'dribble', title: "Dribble", href: '#', iconWidth: socialIconWidth, iconViewBox: socialIconViewBox },
]
const contacts = [
        { name: "Age", value: "24" },
        { name: "Residence", value: "BD" },
        { name: "Freelance", value: "Available" },
        { name: "Address", value: "Minsk, Belarus" }
]
const languages = [
        { name: "Bangla", progress: "100"},
        { name: "English", progress: "90"},
        { name: "Spain", progress: "80"},
]
const skills = [
        { name: "HTML", progress: "90" },
        { name: "Css", progress: "85" },
        { name: "Js", progress: "80" },
        { name: "PHP", progress: "95" },
        { name: "WordPress", progress: "70" },
]
const extraSkills = [
        { description: "Stylus, Sass, Less"},
        { description: "Gulp, Webpack, Grunt"},
        { description: "GIT Knowledge"},
]

type ProfileSidebarPropsType = {
    poppedUp?: boolean
}

export const ProfileSidebar: React.FC<ProfileSidebarPropsType> = (props: ProfileSidebarPropsType) => {
    return (
        <S.ProfileSidebar>
            <S.CloseButton hidden={!props.poppedUp}>
                <span></span>
            </S.CloseButton>
            <S.SidebarWrapper>
                <S.PhotoWrapper>
                    <S.Photo src={photo} alt={'photo'} />
                </S.PhotoWrapper>
                <S.Name>Sergey Mikhovich</S.Name>
                <S.Occupation>Front-end Developer</S.Occupation>
                <S.Links>
                    <IconMenu direction={"row"} justify={"space-between"} items={iconMenuItems}/>
                </S.Links>
                <S.Contacts>
                    {contacts.map((item, index) => (
                        <ContactItem key={index} name={item.name} value={item.value} />
                    ))}
                </S.Contacts>
                <S.Languages>
                    <S.Title>Languages</S.Title>
                    {languages.map((item, index) => (
                        <ProgressItem key={index} name={item.name} progress={item.progress} />
                    ))}
                </S.Languages>
                <S.Skills>
                    <S.Title>Skills</S.Title>
                    {skills.map((item, index) => (
                        <ProgressItem key={index} name={item.name} progress={item.progress} />
                    ))}
                </S.Skills>
                <S.ExtraSkills>
                    <S.Title>Extra Skills</S.Title>
                    {extraSkills.map((item, index) => (
                        <ExtraSkill key={index} description={item.description}/>
                    ))}
                </S.ExtraSkills>
                <S.DownloadButton>
                    <span>Download CV</span>
                    <Icon iconId={"download"} width={"16px"} viewBox={"0 0 16 16"}/>
                </S.DownloadButton>
            </S.SidebarWrapper>
        </S.ProfileSidebar>
    );
};