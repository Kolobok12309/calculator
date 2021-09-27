import Operator from './operator';
import EmptyOperator from './empty';
import PlusOperator from './plus';
import MinusOperator from './minus';
import MulOperator from './mul';
import DivOperator from './div';
import PowOperator from './pow';
import SquareOperator from './square';
import FactOperator from './fact';

export const defaultOperators = [
  PlusOperator,
  MinusOperator,
  MulOperator,
  DivOperator,
  PowOperator,
  SquareOperator,
  FactOperator,
];

export {
  Operator,
  EmptyOperator,
  PlusOperator,
  MinusOperator,
  MulOperator,
  DivOperator,
  PowOperator,
  SquareOperator,
  FactOperator,
};
