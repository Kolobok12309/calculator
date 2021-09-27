import type { Operator } from '../operators';

export interface OperatorResult {
  operator: Operator;
  priority: number;
}

export type ParseResult = OperatorResult | number;
