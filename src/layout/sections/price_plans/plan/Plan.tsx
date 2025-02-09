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

const ListItems = styled.ul`
    margin: 20px 0;
    
    li + li {
        margin-top: 16px;
    }
`

const StyledButton = styled.button<{backgroundColor?: string}>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
`;



