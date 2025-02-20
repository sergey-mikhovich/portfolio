import styled from "styled-components";

type GridWrapperPropsType = {
    templateColumns?: string;
    gap?: string;
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: ${props => props.templateColumns};
    gap: ${ props => props.gap || '0px' };
`;