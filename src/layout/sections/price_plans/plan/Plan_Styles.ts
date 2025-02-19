import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";
import {Button} from "../../../../components/button/Button.tsx";

const Plan = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 310px;
    width: 100%;
    min-height: 610px;
    background-color: ${theme.colors.primaryBg};
`;

const EyeCatchingTitle = styled.div<{mostPopular: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    background-color: ${props => props.mostPopular ? theme.colors.accent : theme.colors.primaryBg};
    min-height: 30px;
`;

const MainContent = styled.div`
    padding: 25px 30px;
`;

const Title = styled.h3`
    font-weight: 600;
    font-size: 24px;
`;

const ComposePrice = styled.div`
    margin: 20px 0 10px;
`

const Price = styled.span`
    font-weight: 700;
    font-size: 32px;
    margin-right: 10px;
`;

const Hour = styled.span`
    
`;

const Description = styled.p`
    
`;

const PackageItems = styled.ul`
    margin: 20px 0;
    
    li + li {
        margin-top: 16px;
    }
`

const OrderButton = styled(Button)`
    padding: 10px 40px;
    background-color: ${theme.colors.primaryBg};
    border-radius: 30px;
    box-shadow: 1px 0 10px 0 rgba(0, 0, 0, 0.15);
    font-weight: 700;

    &:hover {
        background-color: ${theme.colors.accent};
    }
`;

export const S = {
    Plan,
    EyeCatchingTitle,
    MainContent,
    Title,
    ComposePrice,
    Price,
    Hour,
    Description,
    PackageItems,
    OrderButton,
}