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
import {NavigationSidebar} from "./layout/sidebars/navigation/NavigationSidebar.tsx";
import {ProfileSidebar} from "./layout/sidebars/profile/ProfileSidebar.tsx";
import {CompoundFeedback} from "./layout/sections/compound_feedback/CompoundFeedback.tsx";

export default function App() {
    return (
        <div className="App">
            {/*<ProfileSidebar/>*/}
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
            {/*<NavigationSidebar/>*/}
        </div>
    )
}

