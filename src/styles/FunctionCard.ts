import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  .card {
    padding: 16px;
    width: 235px;
    height: 250px;
    border: 1px solid #dfdfdf;
    border-radius: 15px;
    background-color: #ffffff;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 6px 0px #0000000d;
    color: #252525;
    font-weight: 500;
  }

  .card-element {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .function-name {
    color: #a5a5a5;
    margin-left: 4px;
    font-size: 14px;
    font-weight: 600;
  }

  .input-output {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #585757;
    font-size: 10px;

    div {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;
