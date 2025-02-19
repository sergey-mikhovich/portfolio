import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {Service} from "./service/Service.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {OrderService} from "./service/OrderService.tsx";
import {Container} from "../../../components/Container.ts";
import * as React from "react";
import {S} from "./Services_Styles.ts";

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
]

export const Services: React.FC = () => {
    return (
        <S.Services>
            <Container>
                <SectionTitle>My Services</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"20px"}>
                    {serviceItems.map((item, index) => (
                        <Service
                            key = {index}
                            iconId={item.iconId}
                            title={item.title}
                            description={item.description}/>
                    ))}
                    <OrderService title={'Advertising'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '} actionText={'ORDER NOW'}/>
                </FlexWrapper>
            </Container>
        </S.Services>
    );
};

