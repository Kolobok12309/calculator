type OperatorView = (v1: string, v2?: string) => string;
type OperatorCalc = (v1: number, v2?: number) => number;

interface OperatorOptions {
  token: string | string[];
  priority?: number;
  oneArgument?: boolean;
  view?: OperatorView;
  calc: OperatorCalc;
}

export default class Operator {
  token: string | string[];
  priority: number;
  oneArgument: boolean;
  view: OperatorView;
  calc: OperatorCalc;

  constructor({
    token,
    priority = 0,
    oneArgument = false,
    view,
    calc,
  } = {} as OperatorOptions) {
    this.token = token;
    this.priority = priority;
    this.oneArgument = oneArgument;
    this.calc = calc;

    if (!view) {
      const isTokenArray = Array.isArray(token);

      if (isTokenArray && !token.length)
        throw new Error('View is required for twoArgument operators without token');

      const tokenValue = isTokenArray
        ? token[0]
        : token;

      this.view = oneArgument
        ? (v1) => `${v1}${tokenValue}`
        : (v1, v2) => `${v1} ${tokenValue} ${v2}`;
    } else {
      this.view = view;
    }
  }
}
