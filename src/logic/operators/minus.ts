import Operator from './operator';

export default new Operator({
  token: '-',
  priority: 0,
  calc: (v1, v2) => v1 - v2,
});
