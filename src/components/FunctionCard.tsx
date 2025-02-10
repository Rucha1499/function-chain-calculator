import { FC } from "react";
import indicator from "../assets/images/indicator.svg";
import ellipse from "../assets/images/ellipse.svg";
import EquationInput from "./EquationInput";
import FunctionsDropdown from "./FunctionsDropdown";
import { TFunctionCardProps } from "../types/functionCard";
import { Wrapper } from "../styles/FunctionCard";
import ValueNode from "./ValueNode";
import { DividerPosition } from "../types/valuenode";

const FunctionCard: FC<TFunctionCardProps> = ({
  name,
  id,
  equation,
  nextFunction,
  onFunctionChange,
  onInputChange,
  input,
  output,
  showInputNode = false,
  showOutputNode = false,
}) => {
  return (
    <Wrapper>
      {showInputNode && (
        <ValueNode
          label="Initial value of x"
          value={input}
          nodecolor="#E29A2D"
          dividerPosition={DividerPosition.AFTER_INPUT}
          dividercolor="#FFEED5"
          onChange={onInputChange}
        />
      )}
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
      {showOutputNode && (
        <ValueNode
          label="Final Output y"
          value={output}
          nodecolor="#4CAF79"
          dividerPosition={DividerPosition.BEFORE_INPUT}
          dividercolor="#C5F2DA"
          readonly={true}
          hasError={isNaN(output)}
        />
      )}
    </Wrapper>
  );
};

export default FunctionCard;
