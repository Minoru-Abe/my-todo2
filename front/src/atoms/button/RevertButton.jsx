import { styled } from "styled-components";
import { BaseStyledButton } from "./BaseButton";

export const RevertButton = ({onClick}) => {
    return <SRevertButton onClick={onClick}>Revert</SRevertButton>;
}

const SRevertButton = styled(BaseStyledButton)`
    background-color: #28a745; /* Solid green color */

    &:hover {
        background-color: #218838; /* Darker green on hover */
    }
`;