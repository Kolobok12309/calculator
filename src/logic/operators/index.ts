import Operator from './operator';
import EmptyOperator from './empty';
import PlusOperator from './plus';
import MinusOperator from './minus';
import MulOperator from './mul';
import PowOperator from './pow';
import SquareOperator from './square';

export const defaultOperators = [
  PlusOperator,
  MinusOperator,
  MulOperator,

  PowOperator,
  SquareOperator,
];

export {
  Operator,
  EmptyOperator,
  PlusOperator,
  MinusOperator,
  MulOperator,
  PowOperator,
  SquareOperator,
};
