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
import {ContactInfo} from "./layout/sections/contact_info/ContactInfo.tsx";
import {FlexWrapper} from "./components/FlexWrapper.tsx";
import {LeaveInfo} from "./layout/sections/leave_info/LeaveInfo.tsx";
import {NavigationSidebar} from "./layout/sidebars/navigation/NavigationSidebar.tsx";
import {ProfileSidebar} from "./layout/sidebars/profile/ProfileSidebar.tsx";

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
            <FlexWrapper justify={'space-evenly'} wrap={"wrap"}>
                <LeaveInfo/>
                <ContactInfo/>
            </FlexWrapper>
            <Footer/>
            {/*<NavigationSidebar/>*/}
        </div>
    )
}

