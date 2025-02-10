export const isValidEquation = (input: string) => {
  return /^[0-9\s+\-*/^().x]*$/.test(input);
};

export const calculateResult = (equation: string, x: number): number => {
  try {
    let processedEquation = equation.replace(/(\d+)x/g, `$1 * x`);
    processedEquation = processedEquation.replace(/\^/g, "**");
    // eslint-disable-next-line no-new-func
    const safeFunction = new Function("x", `return ${processedEquation};`);
    const result = safeFunction(x);

    return typeof result === "number" && isFinite(result) ? result : NaN;
  } catch (error) {
    console.error("Calculation error:", error);
    return NaN;
  }
};