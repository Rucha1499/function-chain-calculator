type FunctionConfig = {
  id: number;
  name: string;
  equation: string;
  nextFunction: number | null;
};

export const functionsConfig: FunctionConfig[] = [
  {
    id: 1,
    name: "1",
    equation: "x^2",
    nextFunction: 2,
  },
  {
    id: 2,
    name: "2",
    equation: "2x+4",
    nextFunction: 4,
  },
  {
    id: 3,
    name: "3",
    equation: "x^2+20",
    nextFunction: null,
  },
  {
    id: 4,
    name: "4",
    equation: "x-2",
    nextFunction: 5,
  },
  {
    id: 5,
    name: "5",
    equation: "x/2",
    nextFunction: 3,
  },
];
