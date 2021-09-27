import EmptyOperator from './empty';

describe('Empty operator', () => {
  describe('Calc', () => {
    it('Calculate positive values', () => {
      const testCases = [
        {
          args: [5, 2],
          res: 5,
        },
        {
          args: [Infinity, 6],
          res: Infinity,
        },
        {
          args: [-10],
          res: -10,
        },
      ];

      testCases.forEach(({ args, res }) => {
        const realRes = EmptyOperator.calc(args[0], args[1]);

        expect(realRes).toEqual(res);
      });
    });
  });
});
