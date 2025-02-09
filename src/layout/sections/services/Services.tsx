import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {Service} from "./service/Service.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {OrderService} from "./service/OrderService.tsx";
import {Container} from "../../../components/Container.tsx";

export const Services = () => {
    return (
        <StyledServices>
            <Container>
                <SectionTitle>My Services</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <FlexWrapper justify={"space-around"} wrap={"wrap"} gap={"20px"}>
                    <Service iconId={'coding'} title={'Web Development'} description={'blog, e-commerce'}/>
                    <Service iconId={'uiuxdesign'} title={'UI/UX Design'} description={'Mobile app, website design'}/>
                    <Service iconId={'sound'} title={'Sound Design'} description={'blog, e-commerce'}/>
                    <Service iconId={'gameDesign'} title={'Game Design'} description={'blog, e-commerce'}/>
                    <Service iconId={'photography'} title={'Photography'} description={'blog, e-commerce'}/>
                    <OrderService title={'Advertising'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '} actionText={'ORDER NOW'}/>
                </FlexWrapper>
            </Container>
        </StyledServices>
    );
};

const StyledServices = styled.section`
`;

