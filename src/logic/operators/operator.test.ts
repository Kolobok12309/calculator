import Operator from './operator';

describe('Operator class', () => {
  describe('Constructor', () => {
    describe('Token', () => {
      it('Set string token from argument', () => {
        const options = { token: 'foo', calc: () => 5 };
        const instance = new Operator(options);

        expect(instance.token).toEqual(options.token);
      });

      it('Set array token from argument', () => {
        const options = { token: ['foo', 'bar'], calc: () => 5 };
        const instance = new Operator(options);

        expect(instance.token).toEqual(options.token);
      });
    });

    describe('Priority', () => {
      it('Default priority', () => {
        const options = { token: 'foo', calc: () => 5 };
        const instance = new Operator(options);

        expect(instance.priority).toEqual(0);
      });

      it('Set priority from argument', () => {
        const options = { priority: 5, token: 'foo', calc: () => 5 };
        const instance = new Operator(options);

        expect(instance.priority).toEqual(options.priority);
      });
    });

    describe('OneArgument', () => {
      it('Default oneArgument', () => {
        const options = { token: 'foo', calc: () => 5 };
        const instance = new Operator(options);

        expect(instance.oneArgument).toEqual(false);
      });

      it('Set onArgument from argument', () => {
        const options = { token: 'foo', oneArgument: true, calc: () => 5 };
        const instance = new Operator(options);

        expect(instance.oneArgument).toEqual(options.oneArgument);
      });
    });

    describe('View', () => {
      it('Set view from argument', () => {
        const options = { token: 'foo', calc: () => 5, view: () => 'bar' };
        const instance = new Operator(options);

        expect(instance.view).toEqual(options.view);
      });

      it('Default view for oneArgument simple token', () => {
        const options = { token: 'foo', calc: () => 5, oneArgument: true };
        const instance = new Operator(options);
        const uniqString = 'fhgawr3yafnselif7328roewf';

        expect(instance.view(uniqString)).toEqual(`${uniqString}${options.token}`);
      });

      it('Default view for oneArgument simple token', () => {
        const options = { token: ['bar', 'foo'], calc: () => 5, oneArgument: true };
        const instance = new Operator(options);
        const uniqString = 'sfdbfdjfskeb';

        expect(instance.view(uniqString)).toEqual(`${uniqString}${options.token[0]}`);
      });

      it('Default view for simple token', () => {
        const options = { token: 'foo', calc: () => 5 };
        const instance = new Operator(options);
        const uniqString1 = 'sdgnvdf sljfbsdl';
        const uniqString2 = 'sdm csjekjfnsmd ck';
        const expectedResult = `${uniqString1} ${options.token} ${uniqString2}`;

        expect(instance.view(uniqString1, uniqString2)).toEqual(expectedResult);
      });

      it('Default view for array token', () => {
        const options = { token: ['bar', 'foo'], calc: () => 5 };
        const instance = new Operator(options);
        const uniqString1 = 'sdgnvdf sljfbsdl';
        const uniqString2 = 'sdm csjekjfnsmd ck';
        const expectedResult = `${uniqString1} ${options.token[0]} ${uniqString2}`;

        expect(instance.view(uniqString1, uniqString2)).toEqual(expectedResult);
      });

      it('Throw error if empty array token', () => {
        const options = { token: [], calc: () => 5 };

        expect(() => {
          new Operator(options);
        }).toThrow();
      });
    });

    describe('Calc', () => {
      it('Set calc from argument', () => {
        const options = { token: 'foo', calc: () => 5 };
        const instance = new Operator(options);

        expect(instance.calc).toEqual(options.calc);
      });
    });
  });
});
