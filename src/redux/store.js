import { configureStore} from '@reduxjs/toolkit';
import { filter} from './reducers';
import { contactsApi } from './contactsApi';
import { authReducer } from './index';
import {  persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export const store = configureStore({
  reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      [contactsApi.reducerPath]: contactsApi.reducer,
      filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});
  export const persistor = persistStore(store);
  