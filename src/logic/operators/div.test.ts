import DivOperator from './div';

describe('Div operator', () => {
  describe('Calc', () => {
    it('Calculate integer values', () => {
      expect(DivOperator.calc(3, 3)).toEqual(1);
      expect(DivOperator.calc(100, 100)).toEqual(1);
      expect(DivOperator.calc(22, 2)).toEqual(11);
      expect(DivOperator.calc(15, -3)).toEqual(-5);
      expect(DivOperator.calc(15, 0)).toEqual(Infinity);
    });

    it('Calculate fraction values', () => {
      expect(DivOperator.calc(25, 1/5)).toEqual(125);
      expect(DivOperator.calc(5, 10)).toEqual(1/2);
      expect(DivOperator.calc(-0, 1000)).toEqual(-0);
      expect(DivOperator.calc(1/4, 1/2)).toEqual(1/2);
    });
  });
});
