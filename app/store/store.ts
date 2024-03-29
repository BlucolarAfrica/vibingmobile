import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import reducer from './reducer';
import { reduxStorage } from './storage';

import { apiMiddleware } from 'service/config';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  version: 1,
  whitelist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiMiddleware),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;

export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof store.getState>;
