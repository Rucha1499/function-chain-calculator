export enum DividerPosition {
  AFTER_INPUT = "AFTER_INPUT",
  BEFORE_INPUT = "BEFORE_INPUT",
}

export type TValueNodeProps = {
  label: string;
  readonly?: boolean;
  nodecolor: string;
  textcolor: string;
  labelcolor: string;
  dividerPosition: DividerPosition;
  dividercolor: string;
  value: string | number;
  onChange?: (e: any) => void;
};
