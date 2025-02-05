import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import photo from "../../../assets/images/photo.webp"
import {Icon} from "../../../components/icon/Icon.tsx";


export const ProfileSidebar = () => {
    return (
        <StyledProfileSidebar>
            <Photo src={photo} alt={'photo'} />
            <h3>Rayan Adlardard</h3>
            <span>Front-end Developer</span>
            <FlexWrapper gap={'10px'}>
                <Icon iconId={'facebook'} width={'24px'} viewBox={'0 0 24 24'}/>
                <Icon iconId={'instagram'} width={'24px'} viewBox={'0 0 24 24'}/>
                <Icon iconId={'twitter'} width={'24px'} viewBox={'0 0 24 24'}/>
                <Icon iconId={'linkedin'} width={'24px'} viewBox={'0 0 24 24'}/>
                <Icon iconId={'youtube'} width={'24px'} viewBox={'0 0 24 24'}/>
                <Icon iconId={'dribble'} width={'24px'} viewBox={'0 0 24 24'}/>
            </FlexWrapper>
            <Title>Languages</Title>
        </StyledProfileSidebar>
    );
};

const StyledProfileSidebar = styled.aside`
    max-width: 305px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Photo = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

const Title = styled.h3`
    
`;