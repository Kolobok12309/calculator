import type { Operator } from './operators';
import { PRIORITY_BRACKET } from './consts';

export default class CompiledOperator {
  v1: number | CompiledOperator;
  v2?: number | CompiledOperator;
  result: number;
  operator: Operator;
  priority: number;

  constructor(
    operator: Operator,
    priority: number,
    v1: number | CompiledOperator,
    v2?: number | CompiledOperator,
  ) {
    this.operator = operator;
    this.priority = priority;
    this.v1 = v1;
    this.v2 = v2;
  }

  get bracketLevel() {
    const bracketPriority = this.priority - this.operator.priority;

    return bracketPriority / PRIORITY_BRACKET;
  }

  private getV1View(depth: number = 1) {
    if (depth === 0) return `${this.exec()}`;

    if (this.v1 instanceof CompiledOperator) {
      const isNeedBrackets = this.v1.operator.priority < this.operator.priority;
      const view = this.v1.view(depth - 1);

      return isNeedBrackets && depth > 1
        ? `(${view})`
        : view;
    } else {
      return `${this.v1}`;
    }
  }

  private getV2View(depth: number = 1) {
    if (depth === 0) return `${this.exec()}`;

    if (this.v2 instanceof CompiledOperator) {
      const isNeedBrackets = this.v2.operator.priority < this.operator.priority;
      const view = this.v2.view(depth - 1);

      // debugger;

      return isNeedBrackets && depth > 1
        ? `(${view})`
        : view;
    } else {
      return `${this.v2}`;
    }
  }

  // TODO Сделать глубину не по вложенности операторов, а по вложенности скобок
  view(depth: number = 1): string {
    if (depth === 0) return `${this.exec()}`;

    const v1View = this.getV1View(depth);

    if (this.operator.oneArgument) return this.operator.view(v1View);

    const v2View = this.getV2View(depth);

    return this.operator.view(v1View, v2View);
  }

  exec(): number {
    if (this.result) return this.result;

    const v1 = this.v1 instanceof CompiledOperator
      ? this.v1.exec()
      : this.v1;

    if (this.operator.oneArgument) {
      this.result = this.operator.calc(v1);
      return this.result;
    }

    const v2 = this.v2 instanceof CompiledOperator
      ? this.v2.exec()
      : this.v2;

    this.result = this.operator.calc(v1, v2);
    return this.result;
  }
}
