import styled from "styled-components";
import {theme} from "../../../slyles/Theme.ts";
import {Button} from "../../../components/button/Button.tsx";

const LeaveInfo = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.secondaryBg};
    //max-width: 570px;
    width: 100%;
    padding: 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
    min-height: 685px;
    width: 100%;
    background-color: ${theme.colors.primaryBg};
    padding: 25px;
    margin-top: 50px;
    
    textarea {
        min-height: 210px;
        resize: none;
    }
`;

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
`;

const Field = styled.input`
    border: none;
    background-color: ${theme.colors.secondaryBg};
    padding: 15px;
    font-size: 20px;
    color: ${theme.colors.primaryFont};
`;

const SendButton = styled(Button)`
    padding: 10px 24px;
    font-weight: 600;
    max-height: 35px;
    max-width: 170px;
`;

export const S = {
    LeaveInfo,
    Form,
    Label,
    Field,
    SendButton,
}