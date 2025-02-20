import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {ProjectsAlbum} from "../../../components/list/ProjectsAlbum.tsx";
import portfolio1 from "../../../assets/images/portfolio-1.webp";
import portfolio2 from "../../../assets/images/portfolio-2.webp";
import portfolio3 from "../../../assets/images/portfolio-3.webp";
import portfolio4 from "../../../assets/images/portfolio-4.webp";
import portfolio5 from "../../../assets/images/portfolio-5.webp";
import portfolio6 from "../../../assets/images/portfolio-6.webp";
import portfolio7 from "../../../assets/images/portfolio-7.webp";
import portfolio8 from "../../../assets/images/portfolio-8.webp";
import portfolio9 from "../../../assets/images/portfolio-9.webp";
import {TabItemPropsType, TabMenu, TabStatusType} from "../../../components/menu/tab_menu/TabMenu.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Portfolio_Styles.ts";
import * as React from "react";

const tabMenuItems : Array<TabItemPropsType> = [
    { title: "All Categories", status: "all" },
    { title: "UI Design", status: "design" },
    { title: "Web Templates", status: "web" },
    { title: "Logo", status: "logo" },
    { title: "Branding", status: "branding" }
]

const projects = [
    { photo: portfolio1, type: "branding" },
    { photo: portfolio2, type: "branding" },
    { photo: portfolio3, type: "web" },
    { photo: portfolio4, type: "web" },
    { photo: portfolio5, type: "web" },
    { photo: portfolio6, type: "logo" },
    { photo: portfolio7, type: "web" },
    { photo: portfolio8, type: "design" },
    { photo: portfolio9, type: "design" },
]

export const Portfolio: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = React.useState<TabStatusType>("all");
    let filteredProjects;

    switch (currentFilterStatus) {
        case "all":
            filteredProjects = projects;
            break;
        case "design":
            filteredProjects = projects.filter(project => project.type === "design");
            break;
        case "web":
            filteredProjects = projects.filter(project => project.type === "web");
            break;
        case "logo":
            filteredProjects = projects.filter(project => project.type === "logo");
            break;
        case "branding":
            filteredProjects = projects.filter(project => project.type === "branding");
            break;
        default:
            filteredProjects = projects;
            break;
    }

    function changeFilterStatus(status: TabStatusType) {
        setCurrentFilterStatus(status)
    }

    return (
        <S.Portfolio id={"portfolio"}>
            <Container>
                <SectionTitle>Portfolio</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <TabMenu
                    currentFilterStatus={currentFilterStatus}
                    tabs={tabMenuItems}
                    changeFilterStatus={changeFilterStatus}
                />
                <ProjectsAlbum projects={filteredProjects}/>
            </Container>
        </S.Portfolio>
    );
};