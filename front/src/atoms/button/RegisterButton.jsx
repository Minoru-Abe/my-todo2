import { styled } from "styled-components";
import { BaseStyledButton } from "./BaseButton";

export const RegisterButton = ({onClick}) => {
    return <SRegisterButton onClick={onClick}>Register</SRegisterButton>;
}

const SRegisterButton = styled(BaseStyledButton)`
    background-color: #007bff; /* Solid blue color */

    &:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }
`;