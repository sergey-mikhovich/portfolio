import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {Service} from "./service/Service.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {OrderService} from "./service/OrderService.tsx";

export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle>My Services</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <FlexWrapper direction={"column"}>
                <FlexWrapper justify={"space-evenly"} wrap={"wrap"}>
                    <Service iconId={'coding'} title={'web development'} description={'blog, e-commerce'}/>
                    <Service iconId={'uiuxdesign'} title={'uI/uX design'} description={'Mobile app, website design'}/>
                    <Service iconId={'sound'} title={'web development'} description={'blog, e-commerce'}/>
                </FlexWrapper>
                <FlexWrapper justify={"space-evenly"} wrap={"wrap"}>
                    <Service iconId={'gameDesign'} title={'web development'} description={'blog, e-commerce'}/>
                    <Service iconId={'photography'} title={'web development'} description={'blog, e-commerce'}/>
                    <OrderService title={'Advertising'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '} actionText={'Order Now >'}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    min-height: 100vh;
    background-color: #f0f0f6;
`;

