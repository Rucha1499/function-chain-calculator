import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { DividerPosition } from "../types/valuenode";
import ValueNode from "./ValueNode";
import FunctionCard from "./FunctionCard";
import { functionsConfig } from "../constants/functions";
import { FUNCTIONS_SEQUENCE } from "../constants/sequence";
import { calculateResult } from "../utils/equation";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 95%;

  .function-cards {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 48px;
  }
`;

const FunctionChainCalculator: FC = () => {
  const [input, setInput] = useState<number>(2);
  const [output, setOutput] = useState<number>(0);

  const [functions, setFunctions] = useState(functionsConfig);

  const updateEquation = (id: number, newEquation: string) => {
    setFunctions(
      functions.map((f: any) =>
        f.id === id ? { ...f, equation: newEquation } : f
      )
    );
  };

  useEffect(() => {
    let currentValue = input;

    FUNCTIONS_SEQUENCE.forEach((functionId) => {
      const func = functions.find((f) => f.id === functionId);
      if (func) {
        currentValue = calculateResult(func.equation, currentValue);
      }
    });

    setOutput(currentValue);
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
