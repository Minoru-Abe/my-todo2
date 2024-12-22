import { styled } from "styled-components";

export const BaseStyledButton = styled.button`
  border: none;
  border-radius: 4px;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
      transform: translateY(-2px);
  }

  &:active {
      transform: translateY(0);
  }
`;


export const BaseButton = () => {
  return <SBaseButton>Click Me</SBaseButton>;
}

const SBaseButton = styled(BaseStyledButton)`
  background: linear-gradient(135deg, #6e8efb, #a777e3);

  &:hover {
      background: linear-gradient(135deg, #a777e3, #6e8efb);
  }
`;