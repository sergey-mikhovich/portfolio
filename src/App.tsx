import {Main} from "./layout/sections/main/Main.tsx";
import {Services} from "./layout/sections/services/Services.tsx";
import {PricePlans} from "./layout/sections/price_plans/PricePlans.tsx";
import {Recommendations} from "./layout/sections/recommendations/Recommendations.tsx";
import {Education} from "./layout/sections/education/Education.tsx";
import {WorkHistory} from "./layout/sections/work_history/WorkHistory.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";
import {Blog} from "./layout/sections/blog/Blog.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {CompoundFeedback} from "./layout/sections/compound_feedback/CompoundFeedback.tsx";
import {ProfileSidebar} from "./layout/sidebars/profile/ProfileSidebar.tsx";
import {NavigationBar} from "./layout/sidebars/navigation/NavigationBar.tsx";
import {Header} from "./layout/header/Header.tsx";
import {S} from "./App_Styles.ts";

export default function App() {
    return (
        <S.App>
            <Header/>

            <S.ProfileSidebarWrapper>
                <ProfileSidebar/>
            </S.ProfileSidebarWrapper>

            <S.MainContent>
                <Main/>
                <Services/>
                <PricePlans/>
                <Recommendations/>
                <Education/>
                <WorkHistory/>
                <Portfolio/>
                <Blog/>
                <CompoundFeedback/>
                <Footer/>
            </S.MainContent>

            <S.SideNavigationWrapper>
                <NavigationBar direction={"column"} padding={'50px 20px 20px'} gap={"40px"}/>
            </S.SideNavigationWrapper>

            <S.BottomNavigationWrapper>
                <NavigationBar direction={"row"} padding={"20px 15px"} gap={"10px"}/>
            </S.BottomNavigationWrapper>
        </S.App>
    )
}

