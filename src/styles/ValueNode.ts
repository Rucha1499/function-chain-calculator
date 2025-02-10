import styled from "styled-components";
import { DividerPosition } from "../types/valuenode";

export const Wrapper = styled.div<{
  nodecolor: string;
  textcolor: string;
  labelcolor: string;
  dividercolor: string;
  error: boolean;
  readonly: boolean;
  dividerPosition: DividerPosition;
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

  .node-container {
    border: 2px solid ${(props) => (props.error ? "red" : props.nodecolor)};
    border-radius: 8px;
    padding: 0px 8px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input {
    width: 64px;
    height: 40px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: ${(props) => (props.error ? "red" : props.textcolor)};
    border-radius: ${(props) =>
      props.dividerPosition === DividerPosition.AFTER_INPUT
        ? "8px 0px 0px 8px"
        : "0px 8px 8px 0px"};
    outline: none;
    border: none;
    border-right: ${(props) =>
      props.dividerPosition === DividerPosition.AFTER_INPUT
        ? `1px solid ${props.dividercolor}`
        : "none"};
    border-left: ${(props) =>
      props.dividerPosition === DividerPosition.BEFORE_INPUT
        ? `1px solid ${props.dividercolor}`
        : "none"};
    cursor: ${(props) => (props.readonly ? "not-allowed" : "cursor")};
    background-color: #ffffff;
  }
`;
