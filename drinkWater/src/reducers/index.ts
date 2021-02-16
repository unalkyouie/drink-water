import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './authReducer';
import reminderReducer from './reminderReducer';

const reducers = combineReducers({
  auth: authReducer,
  reminder: reminderReducer,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
