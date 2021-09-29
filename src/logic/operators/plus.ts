import { PLUS_TOKEN } from '../consts';

import Operator from './operator';

export default new Operator({
  token: PLUS_TOKEN,
  calc: (v1, v2) => v1 + v2,
});
