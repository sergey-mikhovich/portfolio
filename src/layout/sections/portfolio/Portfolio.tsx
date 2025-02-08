import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {PhotoAlbum} from "../../../components/PhotoAlbum.tsx";
import portfolio1 from "../../../assets/images/portfolio-1.webp";
import portfolio2 from "../../../assets/images/portfolio-2.webp";
import portfolio3 from "../../../assets/images/portfolio-3.webp";
import portfolio4 from "../../../assets/images/portfolio-4.webp";
import portfolio5 from "../../../assets/images/portfolio-5.webp";
import portfolio6 from "../../../assets/images/portfolio-6.webp";
import portfolio7 from "../../../assets/images/portfolio-7.webp";
import portfolio8 from "../../../assets/images/portfolio-8.webp";
import portfolio9 from "../../../assets/images/portfolio-9.webp";
import {Menu} from "../../../components/menu/Menu.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../slyles/Theme.ts";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <SectionTitle>Portfolio</SectionTitle>
                <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                <MenuWrapper>
                    <Menu
                        menuItems={["All Categories", "UI Design", "Web Templates", "Logo", "Branding",]}
                        gap={"40px"}
                    />
                </MenuWrapper>
                <PhotoAlbum photos={[
                    { photo: portfolio1, highlighted: true },
                    { photo: portfolio2 },
                    { photo: portfolio3 },
                    { photo: portfolio4 },
                    { photo: portfolio5 },
                    { photo: portfolio6 },
                    { photo: portfolio7 },
                    { photo: portfolio8 },
                    { photo: portfolio9 },
                ]}/>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    background-color: ${theme.colors.secondaryBg};
`;

const MenuWrapper = styled.div`
    margin-bottom: 50px;
    
    a {
        font-weight: 500;
        font-size: 18px;
    }
`