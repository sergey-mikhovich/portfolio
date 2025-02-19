import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Recommendation} from "./Recommendation/Recommendation.tsx";
import avatar1 from '../../../assets/images/avatar-1.webp'
import avatar2 from '../../../assets/images/avatar-2.webp'
import avatar3 from '../../../assets/images/avatar-3.webp'
import {Slider} from "../../../components/slider/Slider.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Recommenadtions_Styles.ts";
import * as React from "react";

const recommendations = [
    {
        rating: 5,
        title: "Great Quality",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profile: {
            photo: avatar1,
            name: 'James Gouse',
            profession: 'Graphic Designer'
        }
    },
    {
        rating: 4,
        title: "Amazing Work",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profile: {
            photo: avatar2,
            name: 'Tiana Philips',
            profession: 'Photographer'
        }
    },
    {
        rating: 4,
        title: "Amazing Work",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profile: {
            photo: avatar3,
            name: 'Talan Westervelt',
            profession: 'Business man'
        }
    },
]

export const Recommendations: React.FC = () => {
    return (
        <S.Recommendations>
            <Container>
                <FlexWrapper direction="column" align={"center"}>
                    <SectionTitle>Recommendations</SectionTitle>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                    <S.ScrollableContainer>
                        {recommendations.map((recommendation, index) => (
                            <Recommendation
                                key={index}
                                rating={recommendation.rating}
                                title={recommendation.title}
                                description={recommendation.description}
                                profile={recommendation.profile}
                            />
                        ))}
                    </S.ScrollableContainer>
                    <FlexWrapper justify={'space-around'} wrap={'wrap'} gap={"20px"}>

                    </FlexWrapper>
                    <S.SliderWrapper>
                        <Slider/>
                    </S.SliderWrapper>
                </FlexWrapper>
            </Container>
        </S.Recommendations>
    );
};

