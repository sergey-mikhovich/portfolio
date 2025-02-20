import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const Services = styled.section`
`;

const Service = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 230px;
    background-color: ${theme.colors.primaryBg};
    padding: 30px 25px 40px;
`;

const IconWrapper = styled.div`
    margin-bottom: 25px;
`;

const Title = styled.h3`
    padding: 0 0 15px;
`;

const Description = styled.p`
    text-align: center;
`;

const OrderButton = styled.button`
    display: flex;
    height: 20px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin-top: 15px;
`;

const ActionText = styled.a`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: ${theme.colors.accent};
`;

export const S = {
    Services,
    Service,
    IconWrapper,
    Title,
    Description,
    OrderButton,
    ActionText,
}