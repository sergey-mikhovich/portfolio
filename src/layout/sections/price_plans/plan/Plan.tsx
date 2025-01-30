import styled from "styled-components";
import {PackageItem, PackageItemPropsType} from "../package_item/PackageItem.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

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
            <EyeCatchingTitle>{props.mostPopular ? 'Most Popular' : ''}</EyeCatchingTitle>
            <Title>{props.title}</Title>
            <span><Price>{`$${props.price}`}</Price>/Hour</span>
            <Description>{props.description}</Description>
            <FlexWrapper direction={'column'}>
                {props.packageItems.map(item => (
                    <PackageItem included={item.included} text={item.text}/>
                ))}
            </FlexWrapper>

            <StyledButton backgroundColor={props.mostPopular ? 'orange' : ''}>Order Now</StyledButton>
        </StyledPlan>
    );
};

const StyledPlan = styled.div`
    width: 30%;
    background-color: lightpink;
`;

const EyeCatchingTitle = styled.div`
    background-color: orange;
`;

const Title = styled.h3`
    
`;

const Price = styled.span`
    font-size: 2em;
`;

const Description = styled.p`
    
`;

const StyledButton = styled.button<{backgroundColor?: string}>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ''};
`;



