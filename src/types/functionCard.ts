export type TFunctionCardProps = {
  name: string;
  id: number;
  equation: string;
  nextFunction: number | null;
  onFunctionChange: (id: number, value: string) => void;
  onInputChange: (value: number) => void;
  showInputNode?: boolean;
  showOutputNode?: boolean;
  output: number;
  input:number;
};
