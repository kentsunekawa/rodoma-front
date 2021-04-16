export type Options = {
  value: number | string;
  label: string;
}[];

export interface SelectorData {
  selected: number | string;
  options?: Options;
}

export interface InputData {
  value: string;
  label?: string;
}

export interface ListData {
  selectorData: SelectorData;
  inputData: InputData;
}
