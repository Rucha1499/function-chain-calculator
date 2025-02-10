import { FC } from "react";
import styled from "styled-components";
import indicator from "../assets/indicator.svg";
import ellipse from "../assets/ellipse.svg";

const Wrapper = styled.div`
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
  }

  .function-name {
    color: #a5a5a5;
    margin-left: 4px;
    font-size: 14px;
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

const FunctionCard: FC<any> = ({
  name,
  id,
  equation,
  nextFunction,
  onFunctionChange,
}) => {
  return (
    <Wrapper>
      <div className="card">
        <div>
          <img src={indicator} alt="indicator-icon" />
          <span className="function-name">Function: {name}</span>
        </div>

        <div>
          <p>Equation</p>
          <input
            type="text"
            value={equation}
            onChange={(e) => {
              onFunctionChange(id, e.target.value);
            }}
          />
        </div>

        <div>
          <p>Next Function</p>
          <select disabled>
            <option>{nextFunction ? `Function: ${nextFunction}` : "-"}</option>
          </select>
        </div>

        <div className="input-output">
          <div>
            <img src={ellipse} alt="ellipse-icon" />
            <span>Input</span>
          </div>

          <div>
            <span>Output</span>
            <img src={ellipse} alt="ellipse-icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FunctionCard;
