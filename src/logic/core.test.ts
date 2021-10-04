import CompiledOperator from './compiled-operator';
import { Calculator } from './core';
import { PlusOperator, MulOperator } from './operators';

describe('Calculator', () => {
  describe('GetMatchRegex', () => {

  });

  describe('Static validateBrackets', () => {

  });

  describe('Compile', () => {
    it('Exact result after view(-1)', () => {
      const calculator = new Calculator();
      const cases = [
        '4 * 7 + 5 + 1 + 3',
        '2 * 2 * (2 + 2)',
        '2^(1 * 3)',
        '(2+2)-2',
        '(2 + ((3 + 2) * 2!)) * -1',
        '-11+-12',
        '-5(2 + 2!)',
        '(2+2)*-5',
        '(2+2)-2',
        '(2+2)2',
        '2++2',
        '(2 + 2) * (2 - 2)'
      ];

      cases.forEach((calcString) => {
        const compiled = calculator.compile(calcString);
        const res = compiled.exec();
        const view = compiled.view(-1);

        expect(compiled).toBeInstanceOf(CompiledOperator);
        expect(calculator.calc(view)).toEqual(res);
      });
    });
  });

  describe('Calc', () => {
    it('Default operators', () => {
      const calculator = new Calculator();

      expect(calculator.calc('2-2*2')).toEqual(-2);
      expect(calculator.calc('(2+2)2')).toEqual(8);
      expect(calculator.calc('(2+2)-2')).toEqual(2);
      expect(calculator.calc('2 +2/2')).toEqual(3);
      expect(calculator.calc('(2 + 2) ^ (2 + 2)')).toEqual(256);
      expect(calculator.calc('(2 + ((3 + 2) * 2!)) * -1')).toEqual(-12);
      expect(calculator.calc('2 /2 + 2')).toEqual(3);
      expect(calculator.calc('-2+11 * -5+4')).toEqual(-53);
      expect(calculator.calc('3! + -11')).toEqual(-5);
      expect(calculator.calc('-11+-12')).toEqual(-23);
      expect(calculator.calc('-5(2 + 2!)')).toEqual(-20);
      expect(calculator.calc('3!!')).toEqual(720);
    });

    it('Custom operators', () => {
      const calculator = new Calculator({
        operators: [PlusOperator, MulOperator],
      });

      expect(calculator.calc('2 + 2 * 2')).toEqual(6);
      expect(calculator.calc('(2 + 2)2')).toEqual(8);
      expect(calculator.calc('(2 + 2) - 2')).toEqual(8);
      expect(calculator.calc('2 -+- 2 * 2')).toEqual(6);
      expect(calculator.calc('(2 + 2) * (2 + 2)')).toEqual(16);
      expect(calculator.calc('(2 + ((3 + 2) * 2)) * -1')).toEqual(-12);
      expect(calculator.calc('2 * 2 + 2')).toEqual(6);
      expect(calculator.calc('-2+11*-5+4')).toEqual(-53);
      expect(calculator.calc('3 + -11')).toEqual(-8);
      expect(calculator.calc('-11 + -12')).toEqual(-23);
      expect(calculator.calc('-5(2 + 2)')).toEqual(-20);
      expect(calculator.calc('5(2 + -2)')).toEqual(0);
    });

    it('Number sign and operators', () => {
      const calculator = new Calculator();

      expect(calculator.calc('2+2')).toEqual(4);
      expect(calculator.calc('2+-2')).toEqual(0);
      expect(calculator.calc('2*-5')).toEqual(-10);
      expect(calculator.calc('2/+2')).toEqual(1);
      expect(calculator.calc('2++2')).toEqual(4);
      expect(calculator.calc('(2+2)-5')).toEqual(-1);
      expect(calculator.calc('(2+2)*-5')).toEqual(-20);
    });

    it('Throw error while operators in a row', () => {
      const calculator = new Calculator();
      const errorMsg = 'Two operators in a row';

      expect(() => {
        calculator.calc('2+++2');
      }).toThrow(errorMsg);
      expect(() => {
        calculator.calc('2+/+2');
      }).toThrow(errorMsg);
      expect(() => {
        calculator.calc('2^*-*2');
      }).toThrow(errorMsg);
      expect(() => {
        calculator.calc('2**2');
      }).toThrow(errorMsg);
    });

    it('Throw error while operator without arguments', () => {
      const calculator = new Calculator();
      const errorMsg = 'require two arguments';

      expect(() => {
        calculator.calc('2+');
      }).toThrow(errorMsg);
      expect(() => {
        calculator.calc('3*');
      }).toThrow(errorMsg);
    });
  });
});
