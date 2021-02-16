import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducers, { AppState } from './reducers';

const store = configureStore({ reducer: reducers });

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, AppState, unknown, Action>;

export default store;
