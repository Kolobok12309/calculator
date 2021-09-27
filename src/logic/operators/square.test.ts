import SquareOperator from './square';

describe('Mul operator', () => {
  describe('Calc', () => {
    it('Calculate integer values', () => {
      expect(SquareOperator.calc(1)).toEqual(1);
      expect(SquareOperator.calc(12)).toEqual(144);
      expect(SquareOperator.calc(-5)).toEqual(25);
      expect(SquareOperator.calc(0)).toEqual(0);
    });

    it('Calculate fraction values', () => {
      expect(SquareOperator.calc(1/2)).toEqual(1/4);
      expect(SquareOperator.calc(-1/2)).toEqual(1/4);
      expect(SquareOperator.calc(2/4)).toEqual(1/4);
      expect(SquareOperator.calc(2/3)).toEqual(4/9);
    });
  });
});
