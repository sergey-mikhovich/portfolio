import styled from "styled-components";
import {theme} from "../../../../slyles/Theme.ts";

const Recommendation = styled.div`
    max-width: 310px;
    width: 100%;
    min-height: 320px;
    background-color: ${theme.colors.primaryBg};
    padding: 25px 25px;
`;

const Stars = styled.div`
    display: flex;
    gap: 10px;
`

const Title = styled.h3`
    padding: 15px 0 20px;
`;

const Description = styled.p`
    text-align: start;
    margin: 0 0 30px;
`;


export const S = {
    Recommendation,
    Stars,
    Title,
    Description,
}