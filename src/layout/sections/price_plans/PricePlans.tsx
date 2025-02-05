import styled from "styled-components";
import {Plan} from "./plan/Plan.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../SectionTitle.tsx";
import {SectionDescription} from "../SectionDescription.tsx";

export const PricePlans = () => {
    return (
        <StyledPricePlans>
            <SectionTitle>Price Plans</SectionTitle>
            <SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
            <FlexWrapper justify={'space-evenly'} wrap={'wrap'}>
                <Plan mostPopular={false}
                      title={'Silver'}
                      price={'0.00'}
                      description={'For most businesses that want to optimize web queries'}
                      packageItems={[
                          { included: true, text: 'UI Design'},
                          { included: true, text: 'Web Development'},
                          { included: false, text: 'Logo Design'},
                          { included: false, text: 'SEO Optimization'},
                          { included: false, text: 'WordPress Integration'},
                          { included: false, text: '5 Websites'},
                          { included: false, text: 'Unlimited User'},
                          { included: false, text: '20 GB Bandwidth'},
                      ]}/>

                <Plan mostPopular={true}
                      title={'Silver'}
                      price={'0.00'}
                      description={'For most businesses that want to optimize web queries'}
                      packageItems={[
                          { included: true, text: 'UI Design'},
                          { included: true, text: 'Web Development'},
                          { included: true, text: 'Logo Design'},
                          { included: true, text: 'SEO Optimization'},
                          { included: false, text: 'WordPress Integration'},
                          { included: false, text: '5 Websites'},
                          { included: false, text: 'Unlimited User'},
                          { included: false, text: '20 GB Bandwidth'},
                      ]}/>

                <Plan mostPopular={false}
                      title={'Silver'}
                      price={'0.00'}
                      description={'For most businesses that want to optimize web queries'}
                      packageItems={[
                          { included: true, text: 'UI Design'},
                          { included: true, text: 'Web Development'},
                          { included: true, text: 'Logo Design'},
                          { included: true, text: 'SEO Optimization'},
                          { included: true, text: 'WordPress Integration'},
                          { included: true, text: '5 Websites'},
                          { included: true, text: 'Unlimited User'},
                          { included: true, text: '20 GB Bandwidth'},
                      ]}/>
            </FlexWrapper>
        </StyledPricePlans>
    );
};

const StyledPricePlans = styled.section`
    background-color: #f0f0f6;
`;