import Operator from './operator';

export default new Operator({
  token: 'empty',
  view: (v1) => v1,
  calc: (v1) => v1,
});
