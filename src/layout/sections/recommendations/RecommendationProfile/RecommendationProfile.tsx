import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../slyles/Theme.ts";

export type RecommendationProfilePropsType = {
    photo: string,
    name: string,
    profession: string,
}

export const RecommendationProfile = (props: RecommendationProfilePropsType) => {
    return (
        <StyledRecommendationProfile>
            <StyledAvatar src={props.photo} alt="avatar"  />
            <FlexWrapper direction={'column'} justify={'center'} align={"start"}>
                <Name>{props.name}</Name>
                <Profession>{props.profession}</Profession>
            </FlexWrapper>
        </StyledRecommendationProfile>
    );
};

const StyledRecommendationProfile = styled.div`
    display: flex;
`;

const StyledAvatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 15px;
`;

const Name = styled.h3`
    margin-bottom: 5px;
`;

const Profession = styled.span`
    color: ${theme.colors.secondaryFont};
`;

