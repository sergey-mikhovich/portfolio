import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

export type RecommendationProfilePropsType = {
    photo: string,
    name: string,
    profession: string,
}

export const RecommendationProfile = (props: RecommendationProfilePropsType) => {
    return (
        <StyledRecommendationProfile>
            <FlexWrapper>
                <StyledAvatar src={props.photo} alt="avatar"  />
                <FlexWrapper direction={'column'}>
                    <h3>{props.name}</h3>
                    <span>{props.profession}</span>
                </FlexWrapper>
            </FlexWrapper>
        </StyledRecommendationProfile>
    );
};

const StyledAvatar = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
`;

const StyledRecommendationProfile = styled.div`
    
`;