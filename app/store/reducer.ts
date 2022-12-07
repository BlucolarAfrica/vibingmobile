import { combineReducers } from 'redux';

import { auth } from './features';

import { apiReducer, apiReducerPath } from 'service/config';

export default combineReducers({
  [apiReducerPath]: apiReducer,
  auth,
});
