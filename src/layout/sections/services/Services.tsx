import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {Service} from "./service/Service.tsx";
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from "./Services_Styles.ts";
import {GridWrapper} from "../../../components/GridWrapper.ts";

const serviceItems = [
    {
        iconId: "coding",
        title: "Web Development",
        description: "blog, e-commerce"
    },
    {
        iconId: "uiuxdesign",
        title: "UI/UX Design",
        description: "Mobile app, website design"
    },
    {
        iconId: "sound",
        title: "Sound Design",
        description: "blog, e-commerce"
    },
    {
        iconId: "gameDesign",
        title: "Game Design",
        description: "blog, e-commerce"
    },
    {
        iconId: "photography",
        title: "Photography",
        description: "blog, e-commerce"
    },
    {
        title: "Advertising",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
        actionText: "order now"
    }
]

export const Services: React.FC = () => {
    return (
        <S.Services id={"services"}>
            <Container>
                <SectionTitle>My Services</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <GridWrapper templateColumns={"repeat(auto-fill, minmax(310px, 1fr))"} gap={"20px"}>
                    {serviceItems.map((item, index) => (
                        <Service
                            key = {index}
                            iconId={item.iconId}
                            title={item.title}
                            description={item.description}
                            actionText={item.actionText}/>
                    ))}
                </GridWrapper>
            </Container>
        </S.Services>
    );
};

