import MinusOperator from './minus';

describe('Minus operator', () => {
  describe('Calc', () => {
    it('Calculate positive values', () => {
      expect(MinusOperator.calc(1, 3)).toEqual(-2);
      expect(MinusOperator.calc(1000, 5)).toEqual(995);
      expect(MinusOperator.calc(2, 2)).toEqual(0);
    });

    it('Calculate negative values', () => {
      expect(MinusOperator.calc(1, -3)).toEqual(4);
      expect(MinusOperator.calc(1000, -5)).toEqual(1005);
      expect(MinusOperator.calc(-5, 2)).toEqual(-7);
    });
  });
});
