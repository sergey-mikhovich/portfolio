import styled from "styled-components";

const Portfolio = styled.section`
    nav {
        margin-bottom: 50px;
        display: flex;
        justify-content: center;

        ul {
            overflow-x: auto;
        }

        a {
            white-space: nowrap;
            font-weight: 500;
            font-size: 18px;
        }
    }
`;

export const S = {
    Portfolio
}