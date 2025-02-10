import { FC, useCallback, useMemo, useState } from "react";
import { DividerPosition } from "../types/valuenode";
import ValueNode from "./ValueNode";
import FunctionCard from "./FunctionCard";
import { FunctionConfig, functionsConfig } from "../constants/functions";
import { FUNCTIONS_SEQUENCE } from "../constants/sequence";
import { calculateResult } from "../utils/equation";
import { Wrapper } from "../styles/FunctionChainCalculator";

const FunctionChainCalculator: FC = () => {
  const [input, setInput] = useState<number>(2);
  const [functions, setFunctions] = useState<FunctionConfig[]>(functionsConfig);

  const updateEquation = useCallback((id: number, newEquation: string) => {
    setFunctions((prevFunctions) =>
      prevFunctions.map((f) =>
        f.id === id ? { ...f, equation: newEquation } : f
      )
    );
  }, []);

  const output = useMemo(() => {
    let currentValue = input;
    FUNCTIONS_SEQUENCE.forEach((functionId) => {
      const func = functions.find((f) => f.id === functionId);
      if (func) {
        currentValue = calculateResult(func.equation, currentValue);
      }
    });
    return currentValue;
  }, [functions, input]);

  return (
    <Wrapper>
      <ValueNode
        label="Initial value of x"
        value={input}
        nodecolor="#E29A2D"
        dividerPosition={DividerPosition.AFTER_INPUT}
        dividercolor="#FFEED5"
        onChange={setInput}
      />
      <div className="function-cards">
        {functions.map((fn) => (
          <FunctionCard
            key={fn.id}
            name={fn.name}
            id={fn.id}
            equation={fn.equation}
            nextFunction={fn.nextFunction}
            onFunctionChange={updateEquation}
          />
        ))}
      </div>
      <ValueNode
        label="Final Output y"
        value={output}
        nodecolor="#4CAF79"
        dividerPosition={DividerPosition.BEFORE_INPUT}
        dividercolor="#C5F2DA"
        readonly={true}
        hasError={isNaN(output)}
      />
    </Wrapper>
  );
};

export default FunctionChainCalculator;
