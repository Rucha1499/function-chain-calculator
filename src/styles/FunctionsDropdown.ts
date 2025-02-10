import styled from "styled-components";

export const StyledSelect = styled.select<{ disabled: boolean }>`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  outline: none;
  padding: 8px 4px;
  background-color: ${(props) => (props.disabled ? "#F5F5F5" : "white")};
  color: ${(props) => (props.disabled ? "#a0a0a0" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
