import Operator from './operator';

export default new Operator({
  token: 'sqr',
  priority: 5,
  oneArgument: true,
  calc: (v1) => v1 * v1,
});
