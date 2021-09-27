import Operator from './operator';

export default new Operator({
  token: '-',
  calc: (v1, v2) => v1 - v2,
});
