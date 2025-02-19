import styled from "styled-components";
import {theme} from "./slyles/Theme.ts";

const ProfileSidebarWrapper = styled.div`
    height: 100vh;
    //
    position: sticky;
    top: 0;
    
    //& > aside {
    //    height: 100%;
    //    overflow: auto;
    //}
`;

const SideNavigationWrapper = styled.div`
    height: 100vh;
    
    position: sticky;
    top: 0;
`;

const BottomNavigationWrapper = styled.div`
    width: 100%;
    height: 80px;
    
    position: fixed;
    bottom: 0;
`;

const App = styled.div`
    //comment here to remove sidebars
    //display: grid;
    //grid-template-areas: "profile main nav";
    //grid-template-columns: 305px auto 110px;
    //justify-content: center;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;
    //max-width: 1440px;
    width: 100%;
    background-color: ${theme.colors.secondaryBg};

    ${ProfileSidebarWrapper} {
        display: block;
    }

    ${SideNavigationWrapper} {
        display: block;
    }
    
    ${BottomNavigationWrapper} {
        display: none;
    }
    
    @media screen and (max-width: 992px) {
        ${SideNavigationWrapper} { 
            display: none;
        }

        ${BottomNavigationWrapper} {
            display: block;
        }
    }

    @media screen and (max-width: 1130px) {
        ${ProfileSidebarWrapper} {
            display: none;
        }
    }
`



const MainContent = styled.div`
    width: 100%;
`;

export const S = {
    ProfileSidebarWrapper,
    SideNavigationWrapper,
    BottomNavigationWrapper,
    App,
    MainContent,
}