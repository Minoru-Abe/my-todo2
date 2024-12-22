import { styled } from "styled-components";
import { BaseStyledButton } from "./BaseButton";

export const RemoveButton = ({onClick}) => {
    return <SRemoveButton onClick={onClick}>Remove</SRemoveButton>;
}

const SRemoveButton = styled(BaseStyledButton)`
    background-color: #dc3545; /* Solid red color */

    &:hover {
        background-color: #c82333; /* Darker red on hover */
    }
`;