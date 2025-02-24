import styled from "styled-components";
import {theme} from "./slyles/Theme.ts";

const ProfileSidebarWrapper = styled.div`
    position: sticky;
    top: 0;
`;

const SideNavigationWrapper = styled.div`
    height: 100vh;
    
    position: sticky;
    top: 0;
`;

const BottomNavigationWrapper = styled.div`
    height: 80px;
    
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
`;

const App = styled.div`
    display: flex;
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