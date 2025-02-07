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
                <FlexWrapper direction={'column'} justify={'center'} align={"start"}>
                    <Name>{props.name}</Name>
                    <Profession>{props.profession}</Profession>
                </FlexWrapper>
            </FlexWrapper>
        </StyledRecommendationProfile>
    );
};

const StyledAvatar = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-right: 25px;
`;

const StyledRecommendationProfile = styled.div`
    
`;

const Name = styled.h3`
    margin-bottom: 5px;
`;

const Profession = styled.p`
    
`;

