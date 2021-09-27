import type { CalculatorOptions, ParseResult, OperatorResult } from './interfaces';
import { OPEN_BRACKET, CLOSE_BRACKET, PRIORITY_BRACKET } from './consts';
import { Operator, EmptyOperator, defaultOperators, MulOperator } from './operators';
import CompiledOperator from './compiled-operator';
import { escapeRegexp } from './utils';

export class Calculator {
  operators: Operator[];

  constructor({
    operators = defaultOperators,
  } = {} as CalculatorOptions) {
    this.operators = operators;
  }

  static numberRegexpString = '(?:[-+])?\\d+(?:[,.]\\d+)?';
  static bracketsRegexpString = `[${OPEN_BRACKET}${CLOSE_BRACKET}]`;

  static getMatchRegex(operators: Operator[] = []): RegExp {
    const tokens = operators
      .reduce((acc, { token }) => acc.concat(token), []);
    const escapedTokens = tokens.map(escapeRegexp);
    const joinedOperatorRegexString = escapedTokens.join('|');

    const matchers = [
      {
        matcher: Calculator.numberRegexpString,
        name: 'number',
      },
      {
        matcher: Calculator.bracketsRegexpString,
        name: 'bracket'
      },
      {
        matcher: joinedOperatorRegexString,
        name: 'operator',
      },
    ];
    const joinedMatcher = matchers
      .map(({ name, matcher }) => `(?<${name}>${matcher})`)
      .join('|');

    return new RegExp(joinedMatcher, 'g');
  }

  static validateBrackets(text: string): boolean {
    const brackets = text.match(new RegExp(Calculator.bracketsRegexpString, 'g'));
    if (!brackets) return true;

    let stack = 0;

    brackets.forEach((bracket) => {
      if (bracket === ')') stack--;
      else stack++
    });

    return stack === 0;
  }

  private getOperatorByToken(token) {
    return this.operators.find((operator) => {
      if (typeof operator.token === 'string') {
        return operator.token === token;
      } else {
        return operator.token.includes(token);
      }
    });
  }

  private parseString(calcString: string): ParseResult[] {
    const matchRegex = Calculator.getMatchRegex(this.operators);
    const match: ParseResult[] = [];

    let res: RegExpExecArray = null;
    let prevRes: RegExpExecArray = null;
    let priorityBonus = 0;

    while (res = matchRegex.exec(calcString)) {
      const { number, bracket, operator } = res.groups;

      if (bracket) {
        if (bracket === CLOSE_BRACKET) {
          priorityBonus -= PRIORITY_BRACKET;
        } else if (bracket === OPEN_BRACKET) {
          // Add mul before bracket if number
          // before bracket wthout operator
          if (prevRes && prevRes.groups.number) {
            match.push({
              operator: MulOperator,
              priority: priorityBonus + MulOperator.priority,
            });
          }

          priorityBonus += PRIORITY_BRACKET;
        }
      } else if (operator) {
        const foundOperator = this.getOperatorByToken(operator);

        match.push({
          operator: foundOperator,
          priority: priorityBonus + foundOperator.priority,
        });
      } else if (number) {
        const { groups: { bracket = null } = {} } = prevRes || {};

        // Add mul after close bracket if
        // number after close bracket without operator
        if (bracket === CLOSE_BRACKET) {
          match.push({
            operator: MulOperator,
            priority: priorityBonus + MulOperator.priority,
          });
        }

        match.push(parseFloat(number.replace(',', '.')));
      }

      prevRes = res;
    }

    return match;
  }

  compile(calcString: string = ''): CompiledOperator {
    const isBracketsValid = Calculator.validateBrackets(calcString);

    if (!isBracketsValid) throw new Error('Invalid brackets');

    const match = this.parseString(calcString);
    const operators = match
      .filter((res) => typeof res !== 'number');

    const results = match.slice() as Array<number | CompiledOperator>;
    (operators as OperatorResult[])
      .sort((a, b) => b.priority - a.priority)
      .forEach((res) => {
        const { operator, priority } = res;
        const index = results
          .indexOf(res as unknown as number | CompiledOperator);

        console.log(priority, operator, index);
        const v1 = results[index - 1];

        if (operator.oneArgument) {
          results.splice(index - 1, 2, new CompiledOperator(operator, priority, v1));
        } else {
          const v2 = results[index + 1];

          results.splice(index - 1, 3, new CompiledOperator(operator, priority, v1, v2));
        }
      });

    if (results.length > 1) throw new Error('Wrong arguments location with "oneArgument" operators');
    if (!results.length) throw new Error('No operators');

    const realResult = results[0];

    if (typeof realResult === 'number') {
      return new CompiledOperator(EmptyOperator, 0, realResult);
    }

    return realResult;
  }

  calc(calcString: string = ''): number {
    const compiled = this.compile(calcString);

    return compiled.exec();
  }
};

(window as any).Calculator = Calculator;
(window as any).calc = new Calculator();
