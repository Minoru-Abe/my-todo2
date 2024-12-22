import { styled } from "styled-components";
import { BaseStyledButton } from "./BaseButton";
export const CompleteButton = ({onClick}) => {
  return <SCompleteButton onClick={onClick}>Complete</SCompleteButton>;
};

const SCompleteButton = styled(BaseStyledButton)`
  background-color: #007bff; /* Solid blue color */

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;
