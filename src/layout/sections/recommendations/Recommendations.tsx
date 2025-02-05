import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Recommendation} from "./Recommendation/Recommendation.tsx";
import avatar1 from '../../../assets/images/avatar-1.webp'
import avatar2 from '../../../assets/images/avatar-2.webp'
import avatar3 from '../../../assets/images/avatar-3.webp'
import {Slider} from "../../../components/slider/Slider.tsx";

export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <SectionTitle>Recommendations</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <FlexWrapper justify={"space-evenly"}>
                <Recommendation icons={[
                    {iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'} ]}
                                title={'Great Quality'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                recommendationProfile={ {photo: avatar1, name: 'James Gouse', profession: 'Graphic Designer'} }/>

                <Recommendation icons={[
                    {iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'} ]}
                                title={'Great Quality'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                recommendationProfile={ {photo: avatar2, name: 'James Gouse', profession: 'Graphic Designer'} }/>

                <Recommendation icons={[
                    {iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'},
                    { iconId: 'star', width: '18px', viewBox: '0 0 18 18'} ]}
                                title={'Great Quality'}
                                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'}
                                recommendationProfile={ {photo: avatar3, name: 'James Gouse', profession: 'Graphic Designer'} }/>

            </FlexWrapper>
            <Slider/>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #f0f0f6;
`;