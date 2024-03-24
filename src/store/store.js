import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { waterReducer } from './water/waterSlice';
import { loadingReducer } from './loading/loadingSlice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    //Добавляем сюда свои редьюсеры!)
    waterSlice: waterReducer,
    loader: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'waterSlice/changeTodayList',
        ],

        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.time'],
        // Ignore these paths in the state
        ignoredPaths: ['waterSlice.waterTodayList'],
      },
    }),
});

export const persistor = persistStore(store);
