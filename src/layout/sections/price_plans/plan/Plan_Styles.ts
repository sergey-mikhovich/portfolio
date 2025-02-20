import styled, {css} from "styled-components";
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

const OrderButton = styled(Button)<{mostPopular: boolean}>`
    padding: 10px 40px;
    background-color: ${theme.colors.primaryBg};
    border-radius: 30px;
    box-shadow: 1px 0 10px 0 rgba(0, 0, 0, 0.15);
    font-weight: 700;
    
    ${props => props.mostPopular && css<{mostPopular: boolean}>`
        animation: backgroundChange 1.2s infinite alternate, scaleChange 1.2s infinite alternate;
    `}

    &:hover {
        background-color: ${theme.colors.accent};
    }
    
    @keyframes backgroundChange {
        from {
            background-color: ${theme.colors.primaryBg};
        }
        to {
            background-color: ${theme.colors.accent};
        }
    }

    @keyframes scaleChange {
        from {
            transform: scale(0.9);
        }
        to {
            transform: scale(1.1);
        }
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