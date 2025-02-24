import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.ts";
import {theme} from "../../slyles/Theme.ts";
import * as React from "react";



// const responsive = {
//     0: {
//         items: 1,
//     },
//     687: {
//         items: 2,
//     },
//     1047: {
//         items: 3
//     }
// }
//
// export const Slider = (props: {items: any[]}) => (
//     <StyledSlider>
//         <AliceCarousel
//             mouseTracking
//             items={props.items}
//             responsive={responsive}
//             controlsStrategy={"responsive"}
//             disableButtonsControls
//         />
//     </StyledSlider>
// )
//
// const StyledSlider = styled.div`
//     width: 100%;
//
//     .alice-carousel__stage-item {
//         padding: 0 10px;
//     }
// `;




export const Slider: React.FC = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    {/*<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>*/}
                    {/*<Name>@ivan ivanow</Name>*/}
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    //border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Slide = styled.div`
    text-align: center;
`
// const Text = styled.p`
//
// `
// const Name = styled.span`
//
// `

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: ${theme.colors.accent};
        border-radius: 50%;

        & + span {
            margin-left: 10px;
        }
    }
`;

