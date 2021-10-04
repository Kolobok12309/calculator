import type { Operator } from './operators';

export default class CompiledOperator {
  private v1: number | CompiledOperator;
  private v2?: number | CompiledOperator;
  private result: number;
  private operator: Operator;

  constructor(
    operator: Operator,
    v1: number | CompiledOperator,
    v2?: number | CompiledOperator,
  ) {
    this.operator = operator;
    this.v1 = v1;
    this.v2 = v2;

    if (!operator.oneArgument && v2 === undefined) {
      throw new Error(`Operator "${operator.token}" require two arguments`);
    }
  }

  private getMaxDepth() {
    const v1Depth = this.v1 instanceof CompiledOperator
      ? this.v1.getMaxDepth() + 1
      : 1;
    const v2Depth = this.v2 instanceof CompiledOperator
      ? this.v2.getMaxDepth() + 1
      : 1;

    const depth =  Math.max(
      v1Depth,
      v2Depth,
    );

    return depth;
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
      const isNeedBrackets = this.v2.operator !== this.operator
        && this.v2.operator.priority <= this.operator.priority;
      const view = this.v2.view(depth - 1);

      return isNeedBrackets && depth > 1
        ? `(${view})`
        : view;
    } else {
      return `${this.v2}`;
    }
  }

  view(depth: number = 1): string {
    if (depth < 0) {
      const maxDepth = this.getMaxDepth();

      depth = Math.max(maxDepth + 1 + depth, 0);
    }
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
