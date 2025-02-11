import './App.css'
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
import styled from "styled-components";
import {theme} from "./slyles/Theme.ts";

export default function App() {
    return (
        <StyledApp>
            {/*<ProfileSidebar/>*/}
            <div>
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
            </div>
            {/*<NavigationSidebar/>*/}
        </StyledApp>
    )
}

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    background-color: ${theme.colors.secondaryBg};
`

