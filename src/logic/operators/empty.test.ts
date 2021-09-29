import EmptyOperator from './empty';

describe('Empty operator', () => {
  describe('Calc', () => {
    it('Calculate any values', () => {
      const randomValue = Math.random() * 100 + 10;
      expect(EmptyOperator.calc(randomValue)).toEqual(randomValue);
      expect(EmptyOperator.calc(1)).toEqual(1);
      expect(EmptyOperator.calc(1000)).toEqual(1000);
      expect(EmptyOperator.calc(undefined)).toEqual(undefined);
      expect(EmptyOperator.calc(1)).toEqual(1);
      expect(EmptyOperator.calc(null)).toEqual(null);
      expect(EmptyOperator.calc(-5)).toEqual(-5);
    });
  });

  describe('View', () => {
    it('View any values', () => {
      const randomValue = `${Math.random() * 100 + 10}`;
      expect(EmptyOperator.view(randomValue)).toEqual(randomValue);
      expect(EmptyOperator.view('Foo')).toEqual('Foo');
      expect(EmptyOperator.view('Bar')).toEqual('Bar');
      expect(EmptyOperator.view('Test')).toEqual('Test');
    });
  });
});
