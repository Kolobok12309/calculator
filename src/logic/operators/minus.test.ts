import MinusOperator from './minus';

describe('Minus operator', () => {
  describe('Calc', () => {
    it('Calculate positive values', () => {
      const testCases = [
        {
          args: [5, 2],
          res: 3,
        },
        {
          args: [10, 6],
          res: 4,
        },
        {
          args: [1009, 9],
          res: 1000,
        },
      ];

      testCases.forEach(({ args, res }) => {
        const realRes = MinusOperator.calc(args[0], args[1]);

        expect(realRes).toEqual(res);
      });
    });
  });
});
