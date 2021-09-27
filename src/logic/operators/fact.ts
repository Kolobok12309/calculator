import Operator from './operator';

const fact = (v1: number): number => {
  if (v1 < 0) throw new Error('Negative value hasn\'t factorial');
  if (v1 % 1) throw new Error('Fraction value hasn\'t factorial');
  if (v1 >= 0 && v1 <= 2) return v1;

  return v1 * fact(v1 - 1);
};

export default new Operator({
  token: '!',
  priority: 10,
  oneArgument: true,
  calc: fact,
  view: (v1) => `${v1}!`,
});

