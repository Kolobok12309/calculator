import MulOperator from './mul';

describe('Mul operator', () => {
  describe('Calc', () => {
    it('Calculate integer values', () => {
      expect(MulOperator.calc(1, 3)).toEqual(3);
      expect(MulOperator.calc(1, -1)).toEqual(-1);
      expect(MulOperator.calc(22, 2)).toEqual(44);
      expect(MulOperator.calc(10, -2)).toEqual(-20);
    });

    it('Calculate fraction values', () => {
      expect(MulOperator.calc(25, 1/5)).toEqual(5);
      expect(MulOperator.calc(1000, 1/100)).toEqual(10);
      expect(MulOperator.calc(-5, -1/2)).toEqual(2.5);
      expect(MulOperator.calc(1/2, 8)).toEqual(4);
    });
  });
});
