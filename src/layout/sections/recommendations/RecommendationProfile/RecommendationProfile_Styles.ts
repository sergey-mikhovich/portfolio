import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";

const RecommendationProfile = styled.div`
    display: flex;
`;

const Avatar = styled.img`
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

export const S ={
    RecommendationProfile,
    Avatar,
    Name,
    Profession,
}