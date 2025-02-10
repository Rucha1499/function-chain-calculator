import { ChangeEvent, FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DividerPosition, TValueNodeProps } from "../types/valuenode";
import { Wrapper } from "../styles/ValueNode";

const ValueNode: FC<TValueNodeProps> = ({
  label,
  readonly = false,
  nodecolor,
  textcolor = "#000000",
  dividerPosition,
  labelcolor = "#FFFFFF",
  value,
  dividercolor,
  onChange,
  hasError = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      onChange && onChange(Number(inputValue));
    }
  };
  return (
    <Wrapper
      nodecolor={nodecolor}
      textcolor={textcolor}
      labelcolor={labelcolor}
      dividercolor={dividercolor}
      error={hasError}
      readonly={readonly}
    >
      <p className="node-label">{label}</p>
      <input
        type="text"
        value={hasError ? "Error!" : value}
        disabled={readonly}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default ValueNode;
