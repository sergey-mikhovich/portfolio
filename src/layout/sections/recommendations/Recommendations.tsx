import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Recommendation} from "./Recommendation/Recommendation.tsx";
import avatar1 from '../../../assets/images/avatar-1.webp'
import avatar2 from '../../../assets/images/avatar-2.webp'
import avatar3 from '../../../assets/images/avatar-3.webp'
import {Slider} from "../../../components/slider/Slider.tsx";
import {Container} from "../../../components/Container.tsx";

const stars = new Array(5).fill({iconId: 'star'})

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle>Recommendations</SectionTitle>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                    <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={"20px"}>
                        <Recommendation icons={stars}
                                        title={'Great Quality'}
                                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                        recommendationProfile={ {photo: avatar1, name: 'James Gouse', profession: 'Graphic Designer'} }/>

                        <Recommendation icons={stars}
                                        title={'Amazing Work'}
                                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                        recommendationProfile={ {photo: avatar2, name: 'Tiana Philips', profession: 'Photographer'} }/>

                        <Recommendation icons={stars}
                                        title={'Great Quality'}
                                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                        recommendationProfile={ {photo: avatar3, name: 'Talan Westervelt', profession: 'Business man'} }/>

                    </FlexWrapper>
                    <SliderWrapper>
                        <Slider/>
                    </SliderWrapper>
                </FlexWrapper>
            </Container>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
`;

const SliderWrapper = styled.div`
    margin-top: 50px;
`