import { FC } from "react";
import { TFunctionsDropdownProps } from "../types/functionDropdown";
import { StyledSelect } from "../styles/FunctionsDropdown";

const FunctionsDropdown: FC<TFunctionsDropdownProps> = ({
  selectedFunction = null,
  disabled = false,
}) => {
  return (
    <StyledSelect disabled={disabled}>
      <option>
        {selectedFunction ? `Function: ${selectedFunction}` : "-"}
      </option>
    </StyledSelect>
  );
};

export default FunctionsDropdown;
