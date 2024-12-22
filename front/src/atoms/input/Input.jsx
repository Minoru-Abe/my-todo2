import styled from "styled-components";

export const Input = (props) => {
  const { placeholder, value, onChange } = props;

  return <SInput type="text" placeholder={placeholder} value={value} onChange={onChange} />;
};

const SInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  width: 200px;
  box-sizing: border-box;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;
