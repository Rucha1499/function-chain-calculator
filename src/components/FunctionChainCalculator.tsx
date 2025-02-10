import { FC, useCallback, useMemo, useState } from "react";
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
      {functions.map((fn) => (
        <FunctionCard
          key={fn.id}
          name={fn.name}
          id={fn.id}
          equation={fn.equation}
          nextFunction={fn.nextFunction}
          onFunctionChange={updateEquation}
          onInputChange={setInput}
          output={output}
          input={input}
          showInputNode={fn?.hasInputNode}
          showOutputNode={fn?.hasOutputNode}
        />
      ))}
    </Wrapper>
  );
};

export default FunctionChainCalculator;
