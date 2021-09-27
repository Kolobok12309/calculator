import FactOperator from './fact';

describe('Factorial operator', () => {
  describe('Calc', () => {
    it('Calculate natural values', () => {
      expect(FactOperator.calc(0)).toEqual(0);
      expect(FactOperator.calc(1)).toEqual(1);
      expect(FactOperator.calc(2)).toEqual(2);
      expect(FactOperator.calc(3)).toEqual(6);
      expect(FactOperator.calc(4)).toEqual(24);
      expect(FactOperator.calc(5)).toEqual(120);
    });

    it('Throw err for fraction values', () => {
      const errMsg = 'Fraction value hasn\'t factorial'

      expect(() => {
        FactOperator.calc(1 / 2);
      }).toThrow(errMsg);

      expect(() => {
        FactOperator.calc(0.1);
      }).toThrow(errMsg);

      expect(() => {
        FactOperator.calc(1/3);
      }).toThrow(errMsg);
    });

    it('Throw err for negative values', () => {
      const errMsg = 'Negative value hasn\'t factorial'

      expect(() => {
        FactOperator.calc(-5);
      }).toThrow(errMsg);

      expect(() => {
        FactOperator.calc(-10);
      }).toThrow(errMsg);

      expect(() => {
        FactOperator.calc(-1/3);
      }).toThrow(errMsg);
    });
  });
});
