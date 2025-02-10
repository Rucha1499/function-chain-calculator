import { ChangeEvent, FC } from "react";
import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DividerPosition, TValueNodeProps } from "../types/valuenode";

const Wrapper = styled.div<{
  nodecolor: string;
  textcolor: string;
  labelcolor: string;
  dividercolor: string;
  error: boolean;
  readonly: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  .node-label {
    color: ${(props) => props.labelcolor};
    background-color: ${(props) => (props.error ? "red" : props.nodecolor)};
    border-radius: 14px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
  }

  input {
    width: 105px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => (props.error ? "red" : props.textcolor)};
    border: 2px solid ${(props) => (props.error ? "red" : props.nodecolor)};
    border-radius: 8px;
    background-color: #ffffff;
    outline: none;
    cursor: ${(props) => (props.readonly ? "not-allowed" : "pointer")};
  }
`;

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
