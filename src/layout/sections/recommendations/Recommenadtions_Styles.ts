import styled from "styled-components";

const Recommendations = styled.section`
    
`;

const SliderWrapper = styled.div`
    margin-top: 50px;
`

const ScrollableContainer = styled.div`
    //display: flex;
    //width: 100%;
    //flex-wrap: nowrap;
    //overflow: auto;
    //gap: 20px;
    //
    //& > div {
    //    flex: 0 0 auto;
    //}

    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 20px;
`;

export const S = {
    Recommendations,
    SliderWrapper,
    ScrollableContainer,
}