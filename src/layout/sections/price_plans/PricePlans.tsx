import {Plan} from "./plan/Plan.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";
import {Container} from "../../../components/Container.ts";
import { S } from "./PricePlans_Styles.ts";

const plans = [
    {
        mostPopular: false,
        title: "Silver",
        price: "0.00",
        description: "For most businesses that want to optimize web queries",
        packageItems: [
            { included: true, text: 'UI Design'},
            { included: true, text: 'Web Development'},
            { included: false, text: 'Logo Design'},
            { included: false, text: 'SEO Optimization'},
            { included: false, text: 'WordPress Integration'},
            { included: false, text: '5 Websites'},
            { included: false, text: 'Unlimited User'},
            { included: false, text: '20 GB Bandwidth'},
        ]
    },
    {
        mostPopular: true,
        title: "Silver",
        price: "0.00",
        description: "For most businesses that want to optimize web queries",
        packageItems: [
            { included: true, text: 'UI Design'},
            { included: true, text: 'Web Development'},
            { included: true, text: 'Logo Design'},
            { included: true, text: 'SEO Optimization'},
            { included: false, text: 'WordPress Integration'},
            { included: false, text: '5 Websites'},
            { included: false, text: 'Unlimited User'},
            { included: false, text: '20 GB Bandwidth'},
        ]
    },
    {
        mostPopular: false,
        title: "Silver",
        price: "0.00",
        description: "For most businesses that want to optimize web queries",
        packageItems: [
            { included: true, text: 'UI Design'},
            { included: true, text: 'Web Development'},
            { included: true, text: 'Logo Design'},
            { included: true, text: 'SEO Optimization'},
            { included: true, text: 'WordPress Integration'},
            { included: true, text: '5 Websites'},
            { included: true, text: 'Unlimited User'},
            { included: true, text: '20 GB Bandwidth'},
        ]
    }
]

export const PricePlans = () => {
    return (
        <S.PricePlans>
            <Container>
                <FlexWrapper direction="column" align={"center"} >
                    <SectionTitle>Price Plans</SectionTitle>
                    <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
                    <S.ScrollableContainer>
                        {plans.map((item, index) => (
                            <Plan
                                key={index}
                                mostPopular={item.mostPopular}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                packageItems={item.packageItems}
                            />
                        ))}
                    </S.ScrollableContainer>
                </FlexWrapper>
            </Container>
        </S.PricePlans>
    );
};