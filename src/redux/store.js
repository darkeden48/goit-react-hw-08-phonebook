import { configureStore} from '@reduxjs/toolkit';
import { filter} from './reducers';
import { contactsApi } from './contactsApi';
import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';



export const store = configureStore({
  reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
      filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware
  ],
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
    devTools: process.env.NODE_ENV === 'development',
  });
  