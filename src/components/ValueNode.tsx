import { FC } from "react";
import styled from "styled-components";
import { DividerPosition, TValueNodeProps } from "../types/valuenode";

const Wrapper = styled.div<{
  nodecolor: string;
  textcolor: string;
  labelcolor: string;
  dividercolor: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  .node-label {
    color: ${(props) => props.labelcolor};
    background-color: ${(props) => props.nodecolor};
    border-radius: 14px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
  }

  .input-container {
    width: 105px;
    display: flex;
    align-items: center;
    border: 2px solid ${(props) => props.nodecolor};
    border-radius: 8px;
    background-color: #ffffff;
    padding: 2px;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.textcolor};
    border: none;
  }
`;

const ValueNode: FC<TValueNodeProps> = ({
  label,
  readonly = false,
  nodecolor,
  textcolor,
  dividerPosition,
  labelcolor,
  value,
  dividercolor,
  onChange,
}) => {
  return (
    <Wrapper
      nodecolor={nodecolor}
      textcolor={textcolor}
      labelcolor={labelcolor}
      dividercolor={dividercolor}
    >
      <p className="node-label">{label}</p>
      <div className="input-container">
        <input
          type="text"
          value={value}
          disabled={readonly}
          onChange={(e) => {
            onChange && onChange(Number(e.target.value));
          }}
        />
      </div>
    </Wrapper>
  );
};

export default ValueNode;
