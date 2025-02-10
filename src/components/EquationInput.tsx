import { ChangeEvent, FC, useState } from "react";
import { isValidEquation } from "../utils/equation";
import styled from "styled-components";
import { TEquationInputProps } from "../types/equationInput";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Input = styled.input<{ hasError: boolean }>`
  border: 1px solid ${(props) => (props.hasError ? "red" : "#D3D3D3")};
  border-radius: 8px;
  padding: 8px;
  outline: none;
  flex: 1;
`;


const EquationInput: FC<TEquationInputProps> = ({
  id,
  equation,
  onFunctionChange,
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onFunctionChange(id, value);
    setError(!isValidEquation(value));
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={equation}
        onChange={handleChange}
        hasError={error}
      />
    </Wrapper>
  );
};

export default EquationInput;
