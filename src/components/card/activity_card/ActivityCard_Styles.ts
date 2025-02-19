import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";

const ActivityCard = styled.li`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    
    background-color: ${theme.colors.primaryBg};
    min-height: 160px;
    height: 100%;
    
    position: relative;
    
    & + & {
        &::before {
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.secondaryBg};
            
            top: 0;
            bottom: 0;
            
            transform: translateY(-50%);

            position: absolute;
        }
    }

    & {
        padding: 30px 0;
    }

    &:first-child {
        padding: 0 0 30px;
    }

    &:last-child {
        padding: 30px 0 0;
    }
`;

const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 355px;
    flex-grow: 1;
`;


const RightPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    
    width: 505px;
    flex-grow: 1;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const Status = styled.span`
    padding-right: 20px;
`;

const Duration = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 7px;
    
    height: 18px;
    font-size: 10px;
    border-radius: 1px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryBg};
`;

const Description = styled.p`
    
`;

export const S = {
    ActivityCard,
    LeftPart,
    RightPart,
    Title,
    Status,
    Duration,
    Description,
}