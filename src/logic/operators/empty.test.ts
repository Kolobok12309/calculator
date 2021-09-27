import EmptyOperator from './empty';

describe('Empty operator', () => {
  describe('Calc', () => {
    it('Calculate any values', () => {
      const randomValue = Math.random() * 100 + 10;
      expect(EmptyOperator.calc(randomValue, 3)).toEqual(randomValue);
      expect(EmptyOperator.calc(1, 3)).toEqual(1);
      expect(EmptyOperator.calc(1000, 5)).toEqual(1000);
      expect(EmptyOperator.calc(undefined, 2)).toEqual(undefined);
      expect(EmptyOperator.calc(1, -3)).toEqual(1);
      expect(EmptyOperator.calc(null, -5)).toEqual(null);
      expect(EmptyOperator.calc(-5, 2)).toEqual(-5);
    });
  });

  describe('View', () => {
    it('View any values', () => {
      const randomValue = Math.random() * 100 + 10;
      expect(EmptyOperator.calc(randomValue, 3)).toEqual(randomValue);
      expect(EmptyOperator.calc(1, 3)).toEqual(1);
      expect(EmptyOperator.calc(1000, 5)).toEqual(1000);
      expect(EmptyOperator.calc(undefined, 2)).toEqual(undefined);
      expect(EmptyOperator.calc(1, -3)).toEqual(1);
      expect(EmptyOperator.calc(null, -5)).toEqual(null);
      expect(EmptyOperator.calc(-5, 2)).toEqual(-5);
    });
  });
});
