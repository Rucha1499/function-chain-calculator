import { ChangeEvent, FC, useState } from "react";
import { isValidEquation } from "../utils/equation";
import { TEquationInputProps } from "../types/equationInput";
import { Input, Wrapper } from "../styles/EquationInput";

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
