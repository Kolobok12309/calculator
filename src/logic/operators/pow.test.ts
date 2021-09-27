import PowOperator from './pow';

describe('Pow operator', () => {
  describe('Calc', () => {
    it('Calculate positive values', () => {
      expect(PowOperator.calc(1, 3)).toEqual(1);
      expect(PowOperator.calc(3, 4)).toEqual(81);
      expect(PowOperator.calc(12, 2)).toEqual(144);
      expect(PowOperator.calc(10, 7)).toEqual(10000000);
    });

    it('Calculate negative values', () => {
      expect(PowOperator.calc(8, -1)).toEqual(1/8);
      expect(PowOperator.calc(2, -2)).toEqual(1/4);
    });

    it('Calculate fraction values', () => {
      expect(PowOperator.calc(25, 1/2)).toEqual(5);
      expect(PowOperator.calc(8, -1/3)).toEqual(1/2);
    });
  });
});
