import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input<{ hasError: boolean }>`
  border: 1px solid ${(props) => (props.hasError ? "red" : "#D3D3D3")};
  border-radius: 8px;
  padding: 8px;
  outline: none;
  flex: 1;
`;