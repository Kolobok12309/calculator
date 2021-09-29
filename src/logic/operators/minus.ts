import { MINUS_TOKEN } from '../consts';

import Operator from './operator';

export default new Operator({
  token: MINUS_TOKEN,
  calc: (v1, v2) => v1 - v2,
});
