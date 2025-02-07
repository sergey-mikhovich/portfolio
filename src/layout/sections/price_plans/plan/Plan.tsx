import styled from "styled-components";
import {PackageItem, PackageItemPropsType} from "../package_item/PackageItem.tsx";
import {theme} from "../../../../slyles/Theme.ts";

type PlanPropsType = {
    mostPopular: boolean
    title: string
    price: string
    description: string
    packageItems : Array<PackageItemPropsType>
}

export const Plan = (props: PlanPropsType) => {
    return (
        <StyledPlan>
            <EyeCatchingTitle mostPopular={props.mostPopular}>{props.mostPopular ? 'Most Popular' : ''}</EyeCatchingTitle>
            <MainContent>
                <Title>{props.title}</Title>
                <ComposePrice>
                    <Price>{`$${props.price}`}</Price><Hour>/Hour</Hour>
                </ComposePrice>
                <Description>{props.description}</Description>
                <ListItems>
                    {props.packageItems.map(item => (
                        <PackageItem included={item.included} text={item.text}/>
                    ))}
                </ListItems>
                <StyledButton backgroundColor={props.mostPopular ? 'orange' : ''}>Order Now</StyledButton>
            </MainContent>
        </StyledPlan>
    );
};

const StyledPlan = styled.div`
    max-width: 310px;
    width: 100%;
    min-height: 610px;
    background-color: ${theme.colors.primaryBg};
`;

const EyeCatchingTitle = styled.div<{mostPopular: boolean}>`
    font-size: 15px;
    line-height: 24px;
    background-color: ${props => props.mostPopular ? theme.colors.accent : theme.colors.primaryBg};
    min-height: 30px;
`;

const MainContent = styled.div`
    padding: 0 30px 25px;
`;

const Title = styled.h3`
    font-weight: 600;
    font-size: 24px;
    margin-top: 25px;
`;

const ComposePrice = styled.div`
    margin: 20px 0 8px;
`

const Price = styled.span`
    font-weight: 700;
    font-size: 32px;
    margin-right: 10px;
`;

const Hour = styled.span`
    font-size: 15px;
`;

const Description = styled.p`
    
`;

const ListItems = styled.ul`
    margin: 20px 0;
    
    li {
        margin: 8px 0;
    }
    
    li:first-child {
        margin: 0 0 8px;
    }
    
    li:last-child {
        margin: 8px 0 0;
    }
`

const StyledButton = styled.button<{backgroundColor?: string}>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
`;



