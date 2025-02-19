import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const Services = styled.section`
`;

const Service = styled.div`
    min-width: 310px;
    width: 310px;
    flex-grow: 1;
    min-height: 230px;
    background-color: ${theme.colors.primaryBg};
    padding: 30px 25px 40px;
`;

const Title = styled.h3`
    padding: 25px 0 15px;
`;

const Description = styled.p`
    
`;

export const S = {
    Services,
    Service,
    Title,
    Description,
}