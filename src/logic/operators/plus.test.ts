import PlusOperator from './plus';

describe('Plus operator', () => {
  describe('Calc', () => {
    it('Calculate positive values', () => {
      expect(PlusOperator.calc(1, 3)).toEqual(4);
      expect(PlusOperator.calc(1000, 5)).toEqual(1005);
      expect(PlusOperator.calc(2, 2)).toEqual(4);
    });

    it('Calculate negative values', () => {
      expect(PlusOperator.calc(1, -3)).toEqual(-2);
      expect(PlusOperator.calc(1000, -5)).toEqual(995);
      expect(PlusOperator.calc(-5, 2)).toEqual(-3);
    });
  });
});
