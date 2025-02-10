export type TEquationInputProps = {
  id: number;
  equation: string;
  onFunctionChange: (id: number, value: string) => void;
};