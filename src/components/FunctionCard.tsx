import { FC } from "react";
import indicator from "../assets/images/indicator.svg";
import ellipse from "../assets/images/ellipse.svg";
import EquationInput from "./EquationInput";
import FunctionsDropdown from "./FunctionsDropdown";
import { TFunctionCardProps } from "../types/functionCard";
import { Wrapper } from "../styles/FunctionCard";

const FunctionCard: FC<TFunctionCardProps> = ({
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

        <div className="card-element">
          <p>Equation</p>
          <EquationInput
            id={id}
            equation={equation}
            onFunctionChange={onFunctionChange}
          />
        </div>

        <div className="card-element">
          <p>Next Function</p>
          <FunctionsDropdown selectedFunction={nextFunction} disabled={true} />
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
