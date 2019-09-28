import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import cupom from './cupom/reducer';

export default combineReducers({
  auth,
  user,
  cupom,
});
