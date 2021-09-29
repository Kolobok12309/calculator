import { Operator, EmptyOperator, PlusOperator, MulOperator } from './operators';
import CompiledOperator from './compiled-operator';

describe('CompiledOperator', () => {
  describe('Constructor', () => {
    it('Throw error for oneArgument operator while not set v2', () => {
      expect(() => {
        new CompiledOperator(PlusOperator, 0);
      }).toThrow('require two arguments');
    });
  });

  describe('View', () => {
    describe('Depth', () => {
      const operator1 = new CompiledOperator(PlusOperator, 1, 3); // 4
      const operator2 = new CompiledOperator(MulOperator, 4, 7); // 28
      const operator3 = new CompiledOperator(PlusOperator, 5, operator1); // 9

      const mainOperator = new CompiledOperator(PlusOperator, operator2, operator3);

      it('Test positive values', () => {
        expect(mainOperator.view()).toEqual('28 + 9');
        expect(mainOperator.view(0)).toEqual('37');
        expect(mainOperator.view(1)).toEqual('28 + 9');
        expect(mainOperator.view(2)).toEqual('4 * 7 + 5 + 4');
        expect(mainOperator.view(3)).toEqual('4 * 7 + 5 + 1 + 3');
        expect(mainOperator.view(Infinity)).toEqual('4 * 7 + 5 + 1 + 3');
      });

      it('Test negative values', () => {
        expect(mainOperator.view(-Infinity)).toEqual('37');
        expect(mainOperator.view(-3)).toEqual('28 + 9');
        expect(mainOperator.view(-2)).toEqual('4 * 7 + 5 + 4');
        expect(mainOperator.view(-1)).toEqual('4 * 7 + 5 + 1 + 3');
      });
    });

    describe('Brackets', () => {
      it('Brackets when need', () => {
        const operator1 = new CompiledOperator(MulOperator, 2, 2);
        const operator2 = new CompiledOperator(PlusOperator, 2, 2);

        const mainOperator = new CompiledOperator(MulOperator, operator1, operator2);

        expect(mainOperator.view(1)).toEqual('4 * 4');
        expect(mainOperator.view(-2)).toEqual('4 * 4');
        expect(mainOperator.view(2)).toEqual('2 * 2 * (2 + 2)');
        expect(mainOperator.view(-1)).toEqual('2 * 2 * (2 + 2)');
      });
    });
  });

  describe('Exec', () => {
    it('Test two numbers', () => {
      expect((new CompiledOperator(PlusOperator, 1, 2)).exec()).toEqual(3);
      expect((new CompiledOperator(PlusOperator, 4, -5)).exec()).toEqual(-1);
      expect((new CompiledOperator(PlusOperator, 11, 2)).exec()).toEqual(13);
    });

    it('Test number and operator', () => {
      const operator1 = new CompiledOperator(PlusOperator, 1, 3);
      const operator2 = new CompiledOperator(PlusOperator, 7, -10);

      expect((new CompiledOperator(PlusOperator, operator1, -5)).exec()).toEqual(-1);
      expect((new CompiledOperator(PlusOperator, 3, operator1)).exec()).toEqual(7);
      expect((new CompiledOperator(PlusOperator, operator1, 10)).exec()).toEqual(14);
      expect((new CompiledOperator(PlusOperator, operator2, 10)).exec()).toEqual(7);
      expect((new CompiledOperator(PlusOperator, 17, operator2)).exec()).toEqual(14);
      expect((new CompiledOperator(PlusOperator, 0, operator2)).exec()).toEqual(-3);
    });

    it('Test two operators', () => {
      const operator1 = new CompiledOperator(PlusOperator, 1, 3); // 4
      const operator2 = new CompiledOperator(PlusOperator, 7, -10); // -3
      const operator3 = new CompiledOperator(PlusOperator, 4, 3); // 7
      const operator4 = new CompiledOperator(PlusOperator, 105, 2); // 107

      expect((new CompiledOperator(PlusOperator, operator1, operator2)).exec()).toEqual(1);
      expect((new CompiledOperator(PlusOperator, operator2, operator3)).exec()).toEqual(4);
      expect((new CompiledOperator(PlusOperator, operator3, operator4)).exec()).toEqual(114);
      expect((new CompiledOperator(PlusOperator, operator1, operator4)).exec()).toEqual(111);
    });
  });
});
