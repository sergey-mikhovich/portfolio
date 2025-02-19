import styled from "styled-components";

const PricePlans = styled.section`
    width: 100%;
`;

const ScrollableContainer = styled.div`
    //display: flex;
    //justify-content: start;
    //width: 100%;
    ////flex-wrap: nowrap;
    //overflow: auto;
    //gap: 20px;
    //
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
    PricePlans,
    ScrollableContainer,
}